import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { FaTrophy, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// questions are here
import { questionBank } from "./data/quizdata";

const QuizPage = () => {
  const { moduleId } = useParams();  // Get selected module from URL
  const questions = questionBank[moduleId] || [];  // Fetch module-specific questions

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(15);
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      handleNextQuestion();
    }
  }, [timer]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => handleNextQuestion(), 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimer(15);
    } else {
      setShowResult(true);
      setIsConfettiActive(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {isConfettiActive && <Confetti />}

      {showResult ? (
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaTrophy className="text-yellow-500 text-6xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">Quiz Completed!</h2>
          <p className="text-lg text-gray-600 mt-2">Your Score: <span className="text-blue-500 font-bold">{score} / {questions.length}</span></p>
          <button 
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={() => window.location.href = "/quiz-modules"}
          >
            Back to Modules
          </button>
        </motion.div>
      ) : (
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-800">{questions[currentQuestion].question}</h2>

          <div className="mt-4 grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                className={`w-full p-3 rounded-lg shadow-md text-lg font-medium 
                  ${selectedAnswer ? 
                    (option === questions[currentQuestion].answer ? "bg-green-500 text-white" : "bg-red-500 text-white") 
                    : "bg-blue-100 text-gray-700 hover:bg-blue-200"
                  }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
                whileTap={{ scale: 0.95 }}
              >
                {option}
                {selectedAnswer && option === questions[currentQuestion].answer && <FaCheckCircle className="inline ml-2 text-white" />}
                {selectedAnswer && option !== questions[currentQuestion].answer && <FaTimesCircle className="inline ml-2 text-white" />}
              </motion.button>
            ))}
          </div>

          <div className="mt-4 text-gray-600">
            Time Left: <span className="font-bold text-blue-500">{timer}s</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuizPage;
