'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaGitAlt,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiBootstrap, SiFlask, SiMysql, SiMariadb, SiVuedotjs, SiLaravel, SiFigma,
} from 'react-icons/si'
import { MdVerified } from 'react-icons/md'
import { GiTeamIdea, GiThink } from 'react-icons/gi'
import { FaUsers, FaComments } from 'react-icons/fa'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Vue.js', icon: <SiVuedotjs className="text-green-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-500" /> },
      { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-700" /> },
    ],
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-black dark:text-white" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    ],
  },
]

const softSkills = [
  { name: 'Teamwork', icon: <FaUsers className="text-blue-400" /> },
  { name: 'Communication', icon: <FaComments className="text-green-400" /> },
  { name: 'Leadership', icon: <GiTeamIdea className="text-yellow-400" /> },
  { name: 'Problem Solving', icon: <GiThink className="text-purple-400" /> },
]

const certifications = [
  'Internet of Things – Fakultas Teknik (2020)',
  'Teachcast Certificate of Completion (2020)',
  'Data Analytics in Practice (Binus Online Learning, 2023)',
  'Intro to Data Analytics (RevoU, 2025)',
  'Intro to Software Engineering (RevoU, 2025)',
  'Humanizing Artificial Intelligence – ITB (2025)',
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-gray-200">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Skills & Certifications
        </h2>

        {/* Hard Skills */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center md:text-left">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center md:text-left">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center md:text-left">
            Sertifikasi & Pelatihan
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <MdVerified className="text-green-400" />
                <span>{cert}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}