import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-6 text-center">
      {/* Hero Section */}
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-blue-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Your AI Python Tutor! 🐍🎓
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Python learning made easy! Our AI-powered tutor provides instant explanations, interactive quizzes, and personalized learning experiences. Whether you're a beginner or an advanced coder, our platform adapts to your needs, helping you master Python efficiently.
      </motion.p>
      
      <motion.p 
        className="text-md md:text-lg text-gray-600 mb-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Designed with an intuitive interface and engaging features, our platform ensures a smooth and enjoyable learning journey. Dive into AI-powered tutoring, pick a personalized mentor, and challenge yourself with interactive quizzes!
      </motion.p>
      
      <motion.button 
        className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate('/tutor-selection')}
      >
        Start Learning 🚀
      </motion.button>

      {/* Features Section */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <FeatureCard title="Chat with AI Tutor" emoji="💬" description="Ask coding questions and get instant AI-generated explanations." link="chat" />
        <FeatureCard title="Pick Your Tutor" emoji="🎭" description="Choose a friendly AI tutor character based on your preference!" link="tutor-selection" />
        <FeatureCard title="Interactive Quizzes" emoji="🎮" description="Test your knowledge with fun Python challenges." link="quiz-modules" />
      </div>
    </div>
  );
};

export default Home;
