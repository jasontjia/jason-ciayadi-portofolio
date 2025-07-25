'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython,
  FaBootstrap, FaGitAlt
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMysql, SiMariadb, SiFlask, SiFigma
} from 'react-icons/si'

import { TbBrandVscode } from 'react-icons/tb'

type SkillGroup = {
  title: string
  items: { name: string; icon: React.ReactNode }[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-600 dark:text-gray-300" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-700" /> },
      { name: 'REST API', icon: <span className="text-sm">🔗</span> },
    ],
  },
  {
    title: 'Tools & Soft Skills',
    items: [
      { name: 'GitHub', icon: <FaGitAlt className="text-black dark:text-white" /> },
      { name: 'VS Code', icon: <TbBrandVscode className="text-blue-500"/>},
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
      { name: 'System Analysis', icon: <span className="text-sm">🧠</span> },
      { name: 'Project Management', icon: <span className="text-sm">📋</span> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-40">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">My Skills</h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">{group.title}</h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 hover:text-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
