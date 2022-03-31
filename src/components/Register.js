import React, { useState } from 'react'

export default function Register({ registerUser }) {
  const [formData, setFormData] = useState({ name: '', points: 0 })
  const [message, setMessage] = useState('')

  const handleOnChange = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (formData.name.length < 3) {
      setMessage('Emri duhet te kete te pakten 3 shkronja')
    } else {
      registerUser(formData)
      setMessage('Ju jeni regjistruar me sukses.')
    }
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="text-rose-500 text-sm font-semibold">{message}</div>
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
    </div>
  )
}
