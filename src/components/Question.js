import React from 'react'

export default function Question({ question }) {
  // console.log(question.answers)
  const answers = question.answers
  // console.log(question)

  return (
    <div className="px-5 py-2 border border-stone-300 rounded shadow">
      <h2 className="font-semibold">{question.question}</h2>
      <div className="flex flex-col pt-2 text-stone-700">
        {question.answers.answer_a && (
          <p className="hover:underline">
            <span className="font-semibold">A: </span>
            {question.answers.answer_a}
          </p>
        )}
        {question.answers.answer_b && (
          <p>
            <span className="font-semibold">B: </span>
            {question.answers.answer_b}
          </p>
        )}
        {question.answers.answer_c && (
          <p>
            <span className="font-semibold">C: </span>
            {question.answers.answer_c}
          </p>
        )}
        {question.answers.answer_d && (
          <p>
            <span className="font-semibold">D: </span>
            {question.answers.answer_d}
          </p>
        )}
        {question.answers.answer_e && (
          <p>
            <span className="font-semibold">e: </span>
            {question.answers.answer_e}
          </p>
        )}
        {question.answers.answer_f && (
          <p>
            <span className="font-semibold">F: </span>
            {question.answers.answer_f}
          </p>
        )}
      </div>
    </div>
  )
}
