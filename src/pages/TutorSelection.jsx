import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tutors = [
  { id: "mentor1", name: "Professor Python", link: "https://avatar.iran.liara.run/public/job/teacher/male", style: "Formal" },
  { id: "mentor2", name: "CodeBuddy", link: "https://avatar.iran.liara.run/public/8", style: "Casual" },
  { id: "mentor3", name: "AI Sensei", link: "https://robohash.org/robot", style: "Technical" },
];

const TutorSelection = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (tutor) => {
    setSelectedTutor(tutor);
    localStorage.setItem("selectedTutor", JSON.stringify(tutor)); // Save tutor choice
    navigate("/modules"); // Redirect to chat
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6 text-center">
      
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Pick Your AI Tutor 🎭</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <button
            key={tutor.id}
            className={`p-6 border rounded-lg shadow-lg hover:bg-blue-300 transition ${
              selectedTutor?.id === tutor.id ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => handleSelect(tutor)}
          >
            <div className="text-4xl"><img src={tutor.link} className="w-52 h-52 rounded-full" alt="Avatar" /></div>
            <h2 className="text-xl font-semibold mt-2">{tutor.name}</h2>
            <p className="text-sm text-gray-700">Style: {tutor.style}</p>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={ ()=> navigate("/")}
         className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
        > Go Back</button>
      </div>
    </div>
  );
};

export default TutorSelection;
