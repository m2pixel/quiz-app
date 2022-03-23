import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-stone-800 py-2">
      <div className="flex flex-row justify-between mx-5 text-stone-200 font-bold">
        <h1>
          <Link to="/">Quiz APP</Link>
        </h1>
        <nav>
          <ul className="container mx-5 flex flex-row space-x-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
