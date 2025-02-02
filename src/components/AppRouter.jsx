import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Chat from '../pages/Chat'
import TutorSelection from '../pages/TutorSelection'
import PythonModules from './PythonModules'
import QuizPage from '../components/QuizPage'
import QuizModuleSelection from '../pages/QuizModuleSelection'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/chat" element={<Chat />} />
            <Route  path="/tutor-selection" element={<TutorSelection />} />
            <Route  path="/modules" element={<PythonModules />} />
            <Route path="/quiz-modules" element={<QuizModuleSelection />} />
            <Route  path="/quiz/:moduleId" element={<QuizPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
