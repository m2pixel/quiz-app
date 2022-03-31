import React, { useEffect, useState } from 'react'
import Register from '../components/Register'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [clearData, setClearData] = useState(false)
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('quiz-user')) || []
  )
  const [formData, setFormData] = useState({
    tags: '',
    difficulty: '',
    number: 0,
  })
  const navigate = useNavigate()

  // clear data from storage and set user to null []
  useEffect(() => {
    if (clearData) {
      localStorage.removeItem('quiz-user')
      localStorage.removeItem('quiz')
      localStorage.removeItem('quiz-settings')
      setUser([])
    }
  }, [clearData])

  // registerUser is function that allows
  const registerUser = (user) => {
    localStorage.setItem('quiz-user', JSON.stringify(user))
    setUser(JSON.parse(localStorage.getItem('quiz-user')))
  }

  // handling changes at form data
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // handle formData on submit
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (
      formData.category !== '' &&
      formData.difficulty !== '' &&
      formData.number !== 0
    ) {
      localStorage.setItem('quiz-settings', JSON.stringify(formData))
      navigate('/quiz')
    } else {
      setMessage('Ju lutem zgjedhni te gjitha opsionet.')
    }
  }

  return (
    <div className="flex flex-col mx-5">
      <h1 className="font-medium font-mono text-xl">Miresevini ne Code Quiz</h1>
      <span className="border-b-2 border-rose-500 w-1/4 md:w-28"></span>
      {user.name && (
        <div className="py-5">
          {user.points > 0 ? (
            <div>
              <p>
                Piket e grumbulluara nga kuizi i kaluar:{' '}
                <strong>{user.points}</strong>
              </p>
              <p>Mbush formen per te provuar perseri</p>
            </div>
          ) : (
            <div>
              <p className="pb-5">
                Tung <strong>{user.name} </strong>
                ju tashme mund te merrni pjese ne kuiz. <br /> Pyetjet do te
                jene rreth gjuheve programuese, kryesisht HTML, JS, PHP (dhe
                Laravel).
                <br />
                <br />
                Ju duhet zgjedhni opsionet me poshte per te filluar kuizin.
              </p>
            </div>
          )}
          <form onSubmit={handleOnSubmit} className="space-y-3">
            <div className="text-rose-500 text-sm font-semibold">{message}</div>
            <div>
              <select
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleOnChange}
                className="w-full md:w-60 py-2 bg-stone-100 rounded"
              >
                <option value="">Category</option>
                <option value="html">HTML</option>
                <option value="javascript">Javascript</option>
                <option value="php">PHP</option>
                <option value="laravel">Laravel</option>
              </select>
            </div>
            <div>
              <select
                id="difficulty"
                value={formData.difficulty}
                name="difficulty"
                onChange={handleOnChange}
                className="w-full md:w-60 py-2 bg-stone-100 rounded"
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div>
              <select
                id="number"
                value={formData.number}
                name="number"
                onChange={handleOnChange}
                className="w-full md:w-60 py-2 bg-stone-100 rounded"
              >
                <option value="">Number of questions</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <button className="w-full md:w-60 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded py-2">
              Fillo kuizin
            </button>
          </form>

          <div className="my-5">
            <button
              onClick={() => setClearData(true)}
              className="w-full md:w-60 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded py-2"
            >
              Fshij te dhenat
            </button>
          </div>
        </div>
      )}
      {user.length === 0 && (
        <div>
          <p className="py-5">
            Per te marr pjese ne kuiz ju duhet fillimisht te regjistroheni, per
            tu regjistruar ju duhet te shenoni emrin tuaj.
          </p>
          <div>
            <Register registerUser={registerUser} message={message} />
          </div>
        </div>
      )}
    </div>
  )
}
