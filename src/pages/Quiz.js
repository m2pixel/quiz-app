import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Question from '../components/Question'
import Results from '../components/Results'
import Loading from '../components/Loading'
import axios from 'axios'

// API Key
const api_key = 'X8X64ASWXteVYRpL24TltQRhqOz3NnAbe3eHydIo'

export default function Quiz() {
  // get user from local storage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('quiz-user')) || []
  )
  // api url attributes and values
  const settings = JSON.parse(localStorage.getItem('quiz-settings'))
  // Questions from API, stored to localStorage
  const [questions, setQuestions] = useState([], () => {
    const data = localStorage.getItem('quiz')
    return data ? JSON.parse(data) : []
  })

  //
  const [points, setPoints] = useState(0)
  const [results, setResults] = useState([], () => {
    const data = localStorage.getItem('results')
    return data ? JSON.parse(data) : []
  })
  const [loading, setLoading] = useState(true)
  const [questionPoint, setQuestionPoint] = useState({
    points: 0,
    totalPoints: 0,
  })
  const [finished, setFinished] = useState(false)
  const navigate = useNavigate()

  const requiredPoints = (60 / 100) * questionPoint.totalPoints

  const setQuestionDifficulty = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 5
      case 'medium':
        return 10
      case 'hard':
        return 15
      default:
        return 5
    }
  }

  const api_url = `https://quizapi.io/api/v1/questions?apiKey=${api_key}&difficulty=${settings.difficulty}&limit=${settings.number}&tags=${settings.tags}
  `
  const pointsForQuestion = setQuestionDifficulty(settings.difficulty)
  const totalPointsOfQuestions = pointsForQuestion * settings.number

  useEffect(() => {
    if (user.length === 0) {
      console.log(user.length)
      navigate('/')
    } else {
      setQuestionPoint({
        points: pointsForQuestion,
        totalPoints: totalPointsOfQuestions,
      })

      axios
        .get(api_url)
        .then((res) => {
          localStorage.setItem('quiz', JSON.stringify(res.data))
          setQuestions(JSON.parse(localStorage.getItem('quiz')))
          setLoading(false)
        })
        .catch((err) => navigate('/404'))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(results))
    // localStorage.setItem('quiz', JSON.stringify(questions))

    if (finished) {
      // store user to local storage
      setUser((prev) => ({ ...user, points: points }))
      setTimeout(() => {
        localStorage.removeItem('results')
      }, 5000)
    }
  }, [results, finished])

  useEffect(() => {
    localStorage.setItem(
      'quiz-user',
      JSON.stringify({ ...user, points: points })
    )
  }, [points])

  const addPoints = () => {
    setPoints(points + questionPoint.points)
  }

  const storeQuestion = (id, question, answer, correct, success) => {
    setResults([
      ...results,
      {
        id: id,
        question: question,
        answer: answer,
        correct: correct,
        success: success,
      },
    ])
  }

  const getQuestions = questions.map((question) => {
    return question.answers ? (
      <Question
        key={question.id}
        question={question}
        addPoints={addPoints}
        storeQuestion={storeQuestion}
      />
    ) : (
      ''
    )
  })

  const showResults = results.map((res) => {
    return <Results key={res.id} results={res} />
  })

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-2 mb-5">
          {!finished ? (
            <div>
              <div className="space-y-2">{getQuestions}</div>
              <span className="text-sm text-stone-400 flex justify-end">
                Pyetjet kane nga {questionPoint.points} pike
              </span>
              <div className="my-5">
                <button
                  onClick={() => setFinished(true)}
                  className="w-full md:w-48 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded py-1"
                >
                  Shfaq rezultatin
                </button>
              </div>
            </div>
          ) : (
            <div>
              {points >= requiredPoints && (
                <h3 className="text-center text-xl pb-4 text-green-600 font-bold">
                  Urime, ju keni kaluar kuizin me sukses!
                </h3>
              )}
              <div className="space-y-2">{showResults}</div>
              <div className="flex flex-col items-center md:items-end">
                <p className="py-2 text-xl font-semibold text-stone-700">
                  Piket e grumbulluara:{' '}
                  <span className="underline">
                    {points} / {questionPoint.totalPoints}
                  </span>
                </p>
                <button className="w-full md:w-48 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded py-1">
                  <Link to="/">Provo perseri</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
