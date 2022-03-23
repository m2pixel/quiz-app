import React, { useEffect, useState } from 'react'
import Register from '../components/Register'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('quiz-user')) || []
  )
  const [formData, setFormData] = useState({
    tags: '',
    difficulty: '',
    number: 5,
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  console.log(formData)
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (formData.category !== '' && formData.difficulty !== '') {
      localStorage.setItem('quiz-settings', JSON.stringify(formData))
      navigate('/quiz')
    } else {
      setMessage('Ju lutem zgjedhni te gjitha opsionet.')
    }
  }

  return (
    <div className="flex flex-col mx-5">
      <h1 className="font-medium text-xl">Miresevini ne quizin tone</h1>
      <span className="border-b-2 border-rose-500 w-1/4"></span>
      {user ? (
        <div className="py-5">
          <p className="pb-5">
            Tung
            <span className="font-semibold text-stone-900"> {user.name}, </span>
            ju tashme mund te merrni pjese ne kuizin tone. Pyetjet do te jene
            rreth gjuheve programuese, kryesisht HTML, JS, PHP.
            <br />
            Klikoni butonin me poshte per te shkuar tek kuizi
          </p>
          <form onSubmit={handleOnSubmit} className="space-y-3">
            <div className="text-rose-500 text-sm font-semibold">{message}</div>
            <div>
              <label htmlFor="category">Category</label>
              <select
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleOnChange}
                className="w-full md:w-48 py-1"
              >
                <option value="">Category</option>
                <option value="html">HTML</option>
                <option value="javascript">Javascript</option>
                <option value="php">PHP</option>
                <option value="laravel">Laravel</option>
              </select>
            </div>
            <div>
              <label htmlFor="difficulty">Difficulty</label>
              <select
                id="difficulty"
                value={formData.difficulty}
                name="difficulty"
                onChange={handleOnChange}
                className="w-full md:w-48 py-1"
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div>
              <label>Number of questions</label>
              <select
                id="number"
                value={formData.number}
                name="number"
                onChange={handleOnChange}
                className="w-full md:w-48 py-1"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <button className="w-full md:w-48 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded py-1">
              Fillo kuizin
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p className="py-5">
            Per te marr pjese ne kuizin tone ju duhet fillimisht te shenoni
            emrin tuaj ne hapsiren me poshte.
          </p>
          <div>
            <Register />
          </div>
        </div>
      )}
    </div>
  )
}
