import React from 'react'

export default function Results({ results }) {
  return (
    <div className="">
      <div
        className={
          results.success
            ? 'px-5 py-3 border border-green-500 rounded-md shadow'
            : 'px-5 py-3 border border-rose-500  rounded-md shadow'
        }
      >
        <h2 className="font-semibold">{results.question}</h2>
        <div className="flex flex-col pt-2 text-stone-700 font-semibold">
          <div>
            Your answer:{' '}
            <span
              className={
                results.success ? 'text-green-500 underline' : 'text-rose-500'
              }
            >
              {results.answer}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
