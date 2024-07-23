import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, isHovered }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`p-4 sm:p-6 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white border border-gray-600 
                 shadow-xl transition-all duration-300 ${isHovered ? 'bg-opacity-20' : 'bg-opacity-5'}`}
  >
    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-100">{skill.name}</h3>
    <p className="text-xs sm:text-sm text-gray-300">{skill.description}</p>
  </motion.div>
);

const SkillsShowcase = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'System Software', description: 'Developing robust system-level components' },
    { name: 'SQL', description: 'Expert database management and optimization' },
    { name: 'C#', description: 'Building scalable applications' },
    { name: 'AI', description: 'Implementing intelligent solutions' },
    { name: 'Web Development', description: 'Creating responsive web applications' },
    { name: 'Electronics', description: 'Circuit design and analysis' },
  ];

  return (
    <div className="mt-20 mx-auto px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <SkillCard skill={skill} isHovered={hoveredSkill === index} />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 h-1 bg-gray-700 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ width: 0 }}
            animate={{ width: hoveredSkill !== null ? `${((hoveredSkill + 1) / skills.length) * 100}%` : '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
      <div className="h-32"></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default SkillsShowcase;
