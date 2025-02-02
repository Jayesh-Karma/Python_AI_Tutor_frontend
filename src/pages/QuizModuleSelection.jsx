import { useNavigate } from "react-router-dom";

const modules = [
  { name: "Python Basics", id: "python_basics" },
  { name: "Object-Oriented Programming", id: "oop" },
  { name: "Python Advanced", id: "python_advanced" },
  { name: "Python Modules", id: "python_modules" },
  { name: "Data Structures", id: "data_structures" },

];

const QuizModuleSelection = () => {
  const navigate = useNavigate();

  const handleModuleSelect = (moduleId) => {
    navigate(`/quiz/${moduleId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Select a Quiz Module</h1>
      <div className="grid gap-4">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => handleModuleSelect(module.id)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition w-64"
          >
            {module.name}
          </button>
        ))}

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow hover:bg-gray-500 transition w-64"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default QuizModuleSelection;
