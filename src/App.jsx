import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnswerPage from './pages/AnswerPage'
import IndividualFeed from './pages/IndividualFeed'
import HomePage from './pages/HomePage'
import QuestionList from './pages/QuestionList'
import InputField from './components/atomicComponents/inputField'
import GlobalStyle from './style/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/post/:id/answer' element={<AnswerPage />} />
          <Route path='/post/:id' element={<IndividualFeed />} />
          <Route path='/list' element={<QuestionList />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<InputField />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
