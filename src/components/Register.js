import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('quiz-user')) || []
  )
  const [formData, setFormData] = useState({ name: '' })
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, name: value })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (formData.name.length < 3) {
      setMessage('Emri duhet te kete te pakten 3 shkronja')
    } else {
      localStorage.setItem('quiz-user', JSON.stringify(formData))
      setUser(formData)
      setMessage('Ju jeni regjistruar me sukses.')
    }
  }
  console.log(message)
  return (
    <div>
      {!user ? (
        <form onSubmit={handleOnSubmit}>
          <div className="flex flex-col">
            <div className="">
              <input
                type="text"
                name="name"
                value={formData.name}
                className="w-full sm:w-48 border-b border-rose-500 text-stone-800 placeholder-stone-600 text-center"
                onChange={handleOnChange}
                placeholder="Sheno emrin tuaj"
              />
            </div>
            <div className="py-2">
              <button className="w-full md:w-48 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded py-1">
                Ruaj
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  )
}
