import { useState, useEffect } from "react";
import AIChatBox from "../components/AIChatBox";

import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";

import {data as pythonModules} from "./data/pythonModulesData";

const PythonModules = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedTutor = localStorage.getItem("selectedTutor");
    if (storedTutor) { 
      setSelectedTutor(JSON.parse(storedTutor));
    }
    else{
      navigate("/")    
    }
    updateProgress();
  }, [currentModule]);

  const updateProgress = () => {
    setProgress(((currentModule + 1) / pythonModules.length) * 100);
  };

  const handleNext = () => {
    if (currentModule < pythonModules.length - 1) {
      setCurrentModule(currentModule + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    }
  };

  return (
    <div className="min-h-screen flex">
    {completed && <ReactConfetti />}
      {/* Left Side: Learning Modules */}
      <div className="w-2/3 p-6 bg-blue-100 flex flex-col justify-center items-center">
        <div className="w-full max-w-3xl bg-white shadow-lg p-6 rounded-lg">
          {/* Progress Bar */}
          <div className="relative w-full bg-gray-300 h-2 rounded-full">
            <div className="absolute top-0 left-0 bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Module Content */}
          {!completed ? (
            <>
              <h2 className="text-2xl font-bold text-blue-600 mt-4">{pythonModules[currentModule].title}</h2>
              <p className="text-gray-700 mt-2">{pythonModules[currentModule].description}</p>
              <pre className="bg-gray-200 h-72  p-2 rounded mt-2 overflow-auto">{pythonModules[currentModule].lesson}</pre>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-blue-500">Code Example:</h3>
                <pre className="bg-gray-800 p-4 rounded mt-2 text-gray-100 h-72 overflow-auto">{pythonModules[currentModule].codeExample}</pre>
              </div>
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                <button 
                  onClick={handlePrev} 
                  disabled={currentModule === 0}
                  className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50"
                >
                  ⬅️ Previous
                </button>
                <button
                onClick={() => navigate("/")}
                className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-600"
                >
                  Go to Home Page 
                </button>
                <button 
                  onClick={handleNext} 
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {currentModule === pythonModules.length - 1 ? "Finish ✅" :
                  <div>{currentModule} / {pythonModules.length}  Page ➡️  </div>
                  }
                </button>
              </div>
            </>
          ) : (
            // Completion Badge
            <div className="text-center mt-6">
              <h2 className="text-3xl font-bold text-green-600">🎉 Congratulations! 🎉</h2>
              <p className="text-lg text-gray-700 mt-2">You have completed the Python modules.</p>
              <div className="mt-4 p-4 border border-green-500 bg-green-100 rounded-lg">
                <h3 className="text-xl font-semibold">🏅 Completion </h3>
                <p className="text-gray-600">Good luck and continue learning!</p>
              </div>
              
              {/* Future Resources & Roadmap */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-blue-600">Next Steps 📍</h3>
                <ul className="mt-2 text-gray-700">
                  <li>🔹 Advanced Python Topics (OOP, Data Structures)</li>
                  <li>🔹 Web Development with Flask/Django</li>
                  <li>🔹 Data Science & Machine Learning</li>
                  <li>🔹 System Design & Scalability</li>
                </ul>
              </div>
            <button onClick={() => window.location.href = "/"} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-6">
              Start Over
            </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Side: AI Chatbox */}
      <div className="w-1/3 p-6 bg-gray-100 flex flex-col">
        <AIChatBox tutor={selectedTutor} />
      </div>
    </div>
  );
};

export default PythonModules;
