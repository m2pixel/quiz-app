import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Quiz from './pages/Quiz'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <div className="container mt-3 md:mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
