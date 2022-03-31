import React, { useEffect, useState } from 'react'

export default function Question({ question, addPoints, storeQuestion }) {
  const [answerClicked, setAnswerClicked] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const answers = question.answers

  /* Te iterohet ne objektin correct_answers
   ** object.entries e kthen objektin ne array
   ** pastaj me map() iterojm ne array
   ** si rezultat
   */
  useEffect(() => {
    Object.entries(question.correct_answers).map((item) => {
      if (item[1] === 'true') {
        // item[0] kthen kete string answer_a_correct
        // me metoden substring marrim vetem karakteret prej zero deri ne 8
        let correct = item[0].substring(0, 8)
        setCorrectAnswer(correct)
      }
    })
  }, [])

  const handleOnChange = (e) => {
    let clickedAnswer = e.target.id
    let answerValue = e.target.value
    setAnswerClicked(true)

    if (clickedAnswer === correctAnswer) {
      storeQuestion(
        question.id,
        question.question,
        answerValue,
        correctAnswer,
        true
      )
      return addPoints()
    } else {
      storeQuestion(
        question.id,
        question.question,
        answerValue,
        correctAnswer,
        false
      )
    }
  }
  return (
    <div className="px-5 py-2 border border-stone-300 rounded shadow">
      <h2 className="font-semibold">{question.question}</h2>
      <div className="flex flex-col pt-2 text-stone-700">
        <form>
          <div>
            {answers.answer_a && (
              <label>
                <input
                  type="radio"
                  id="answer_a"
                  name="answer"
                  value={answers.answer_a}
                  onChange={handleOnChange}
                  disabled={answerClicked}
                />{' '}
                {answers.answer_a}
              </label>
            )}
          </div>
          <div>
            {answers.answer_b && (
              <label>
                <input
                  type="radio"
                  id="answer_b"
                  name="answer"
                  value={answers.answer_b}
                  onChange={handleOnChange}
                  disabled={answerClicked}
                />{' '}
                {answers.answer_b}
              </label>
            )}
          </div>
          <div>
            {answers.answer_c && (
              <label>
                <input
                  type="radio"
                  id="answer_c"
                  name="answer"
                  value={answers.answer_c}
                  onChange={handleOnChange}
                  disabled={answerClicked}
                />{' '}
                {answers.answer_c}
              </label>
            )}
          </div>
          <div>
            {answers.answer_d && (
              <label>
                <input
                  type="radio"
                  id="answer_d"
                  name="answer"
                  value={answers.answer_d}
                  onChange={handleOnChange}
                  disabled={answerClicked}
                />{' '}
                {answers.answer_d}
              </label>
            )}
          </div>
          <div>
            {answers.answer_e && (
              <label>
                <input
                  type="radio"
                  id="answer_e"
                  name="answer"
                  value={answers.answer_e}
                  onChange={handleOnChange}
                  disabled={answerClicked}
                />{' '}
                {answers.answer_e}
              </label>
            )}
          </div>
          <div>
            {answers.answer_f && (
              <label>
                <input
                  type="radio"
                  id="answer_f"
                  name="answer"
                  value={answers.answer_f}
                  onChange={handleOnChange}
                  disabled={answerClicked}
                />{' '}
                {answers.answer_f}
              </label>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
