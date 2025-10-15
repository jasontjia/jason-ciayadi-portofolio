'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaGitAlt, FaNetworkWired,
  FaUsers, FaComments, FaCode,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiBootstrap, SiFlask, SiMysql, SiMariadb, SiVuedotjs, SiLaravel, SiFigma, SiVercel, SiGit, SiNextdotjs, SiCodewars, SiDocker, SiTypescript,
} from 'react-icons/si'
import { MdVerified, MdOutlineDesignServices } from 'react-icons/md'
import { GiTeamIdea, GiThink } from 'react-icons/gi'
import { BsDiagram3 } from 'react-icons/bs'
import { HiOutlineClipboardList, HiOutlineEye } from 'react-icons/hi'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Vue.js', icon: <SiVuedotjs className="text-green-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
      { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-500" /> },
      { name: 'REST API', icon: <FaNetworkWired className="text-gray-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-700" /> },
    ],
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'VS Code', icon: <SiCodewars className="text-blue-500" /> },
      { name: 'Git', icon: <SiGit className="text-orange-500" /> },
      { name: 'Github', icon: <FaGitAlt className="text-black dark:text-white" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
      { name: 'Vercel', icon: <SiVercel className="text-white" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
    ],
  },
  {
    title: 'Metodologi',
    skills: [
      { name: 'Agile', icon: <HiOutlineClipboardList className="text-green-400" /> },
      { name: 'RAD', icon: <HiOutlineClipboardList className="text-yellow-400" /> },
    ],
  },
]

const softSkills = [
  { name: 'Web Programming', icon: <FaCode className="text-green-500" /> },
  { name: 'Teamwork', icon: <FaUsers className="text-blue-400" /> },
  { name: 'Communication', icon: <FaComments className="text-green-400" /> },
  { name: 'Leadership', icon: <GiTeamIdea className="text-yellow-400" /> },
  { name: 'Problem Solving', icon: <GiThink className="text-purple-400" /> },
  { name: 'System Analysis', icon: <BsDiagram3 className="text-cyan-400" /> },
  { name: 'Analytical Thinking', icon: <GiThink className="text-blue-500" /> },
  { name: 'Information Systems', icon: <BsDiagram3 className="text-blue-400" /> },
  { name: 'Project Management', icon: <HiOutlineClipboardList className="text-yellow-400" /> },
  { name: 'Decision Making', icon: <HiOutlineClipboardList className="text-green-400" /> },
  { name: 'Desain Antarmuka', icon: <MdOutlineDesignServices className="text-pink-500" /> },
]

const certifications = [
  { title: 'Internet of Things – Fakultas Teknik (2020)', image: '/certificates/E-SERTIFIKAT IOT KULIAH UMUM FAKULTAS TEKNIK_page-0001.jpg' },
  { title: 'Teachcast Certificate of Completion Level 4 (2021)', image: '/certificates/Sertifikat-Teachcast-Level4.png' },
  { title: 'Data Analytics in Practice (Binus Online Learning, 2023)', image: '/certificates/Jason Ciayadi - 11 March 2023_page-0001.jpg' },
  { title: 'Intro to Data Analytics (RevoU, 2025)', image: '/certificates/DAMC Sertifikat.jpg' },
  { title: 'Intro to Software Engineering (RevoU, 2025)', image: '/certificates/SEFC Sertifikat.jpeg' },
  { title: 'Humanizing Artificial Intelligence – ITB (2025)', image: '/certificates/HumanizingAI_Sertifikat.jpg' },
]

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null)

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
        <div className="grid md:grid-cols-4 gap-10 mb-16">
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
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2">
                  <MdVerified className="text-green-400" />
                  <span>{cert.title}</span>
                </div>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-blue-400 hover:text-blue-300 transition"
                  aria-label={`Lihat sertifikat ${cert.title}`}
                >
                  <HiOutlineEye className="text-xl" />
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Modal Sertifikat */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
                onClick={() => setSelectedCert(null)}
              >
                &times;
              </button>
              <h3 className="text-lg font-semibold mb-4 text-center text-blue-400">
                {selectedCert.title}
              </h3>
              <div className="flex justify-center">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={800}
                  height={600}
                  className="rounded-lg border border-gray-700"
                />
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  )
}
