import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-stone-800 py-3 font-mono uppercase">
      <div className="flex flex-row justify-between mx-5 text-white font-bold">
        <h1 className="hover:text-rose-500">
          <Link to="/">CodeQuiz</Link>
        </h1>
        <nav>
          <ul className="container mx-5 flex flex-row space-x-5">
            <li className="hover:underline decoration-rose-500 underline-offset-4">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline decoration-rose-500 underline-offset-4">
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
