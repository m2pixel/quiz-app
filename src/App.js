import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <div className="container py-5 md:mx-auto">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
