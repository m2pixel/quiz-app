import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-8xl font-semibold text-rose-500 font-mono">404</h2>
      <span className="py-5">
        Kerkesa juaj nuk eshte gjentur, ju lutem kthehuni te ballina.
      </span>
      <Link to="/">
        <button className="w-full px-10 md:w-48 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded py-1">
          <Link to="/">Ballina</Link>
        </button>
      </Link>
    </div>
  )
}
