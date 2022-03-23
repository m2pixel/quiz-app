import React, { useEffect, useState } from 'react'
import Question from '../components/Question'
import axios from 'axios'

export default function Quiz() {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem('quiz')) || []
  )
  const settings = JSON.parse(localStorage.getItem('quiz-settings'))

  const api_key = 'X8X64ASWXteVYRpL24TltQRhqOz3NnAbe3eHydIo'
  const api_url = `https://quizapi.io/api/v1/questions?apiKey=${api_key}&difficulty=${settings.difficulty}&limit=${settings.number}&tags=${settings.tags}
  `
  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => localStorage.setItem('quiz', JSON.stringify(res.data)))
      .catch((err) => console.log(err))
    setQuestions(JSON.parse(localStorage.getItem('quiz')))
  }, [])
  console.log(questions)
  const getQuestions = questions.map((question) => {
    return question.answers ? (
      <Question key={question.id} question={question} />
    ) : (
      ''
    )
  })

  return (
    <div className="mx-5">
      <div className="space-y-5">{getQuestions}</div>
    </div>
  )
}
