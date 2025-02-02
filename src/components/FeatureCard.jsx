import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FeatureCard = ({emoji, title, description, link}) => {
  return (
    <motion.div 
    className="p-6 bg-white shadow-md rounded-lg text-center max-w-sm mx-auto"
    whileHover={{ scale: 1.05 }}
  >
  <Link to={`/${link}`}>
    <div className="text-4xl mb-2">{emoji}</div>
    <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </Link>
  </motion.div>
  )
}

export default FeatureCard
