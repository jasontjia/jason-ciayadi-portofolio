'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'
import { HiOutlineEye } from 'react-icons/hi'
import { FaFileAlt, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa'
import { SiTailwindcss, SiBootstrap, SiFlask, SiMysql, SiMariadb, SiFigma } from 'react-icons/si'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-blue-300" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-300" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-blue-300" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-blue-300" /> },
      { name: 'ASP.NET', icon: <FaCode className="text-blue-300" /> },
    ],
  },
  {
    title: 'Backend & Business App',
    skills: [
      { name: 'PHP', icon: <FaPhp className="text-blue-300" /> },
      { name: 'JavaScript', icon: <FaJs className="text-blue-300" /> },
      { name: 'Python', icon: <FaPython className="text-blue-300" /> },
      { name: 'Flask', icon: <SiFlask className="text-blue-300" /> },
      { name: 'C#', icon: <FaCode className="text-blue-300" /> },
      { name: 'Visual Basic', icon: <FaCode className="text-blue-300" /> },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MS SQL Server', icon: <FaDatabase className="text-blue-300" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-300" /> },
    ],
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'VS Code', icon: <FaCode className="text-blue-300" /> },
      { name: 'MS Report Designer', icon: <FaFileAlt className="text-blue-300" /> },
      { name: 'MS Report Builder', icon: <FaFileAlt className="text-blue-300" /> },
      { name: 'Git', icon: <FaGitAlt className="text-blue-300" /> },
      { name: 'GitHub', icon: <FaGithub className="text-blue-300" /> },
      { name: 'Figma', icon: <SiFigma className="text-blue-300" /> },
    ],
  },
]

const hardSkills = ['Web Programming', 'Analisis Sistem', 'Manajemen Proyek', 'Sistem Informasi', 'Desain Antarmuka', 'Testing', 'Debugging']
const softSkills = ['Kepemimpinan', 'Kolaborasi', 'Komunikasi', 'Problem Solving', 'Pengambilan Keputusan']

const certifications = [
  { title: 'Teachcast Certificate of Completion (Teachcast, 2021)', image: '/certificates/Sertifikat-Teachcast-Level4.png' },
  { title: 'Data Analytics in Practice Case Study: Finance & HR/People (Binus Online Learning, 2023)', image: '/certificates/Jason Ciayadi - 11 March 2023_page-0001.jpg' },
  { title: 'Intro to Data Analytics (RevoU, 2025)', image: '/certificates/DAMC Sertifikat.jpg' },
  { title: 'Intro to Software Engineering (RevoU, 2025)', image: '/certificates/SEFC Sertifikat.jpeg' },
  { title: 'Humanizing Artificial Intelligence: Peta & Masa Depan Ekosistem AI Indonesia (ITB, 2025)', image: '/certificates/HumanizingAI_Sertifikat.jpg' },
  { title: 'Bootcamp Kilat Full Stack Developer (harisenin.com, 2025)', image: '/certificates/Sertifikat - Jason Christopher Ciayadi-1.png' },
  { title: 'Induction Basic Training (PT Indomobil Finance Indonesia, 2025)', image: '/certificates/sertifikat_basic-JasonCiayadi.jpg' },
]

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null)

  const chipClass =
    'bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-full text-sm text-slate-200 hover:bg-blue-500/10 hover:border-blue-500/30 transition'

  return (
    <section id="skills" className="py-20 px-6 bg-slate-950 text-slate-200 border-t border-slate-800">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Skills & Certifications</h2>

        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-blue-300 mb-6 text-center md:text-left">{group.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="flex flex-col items-center p-4 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <p className="text-sm font-medium text-center text-slate-200">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-blue-300 mb-6 text-center md:text-left">Hard Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {hardSkills.map((s) => (
              <span key={s} className={chipClass}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-blue-300 mb-6 text-center md:text-left">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {softSkills.map((s) => (
              <span key={s} className={chipClass}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-300 mb-4 text-center md:text-left">Sertifikasi & Pelatihan</h3>
          <ul className="space-y-3">
            {certifications.map((cert, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="flex items-center justify-between gap-2 bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3 hover:border-blue-500/30 transition"
              >
                <div className="flex items-center gap-2">
                  <MdVerified className="text-blue-300" />
                  <span className="text-slate-200">{cert.title}</span>
                </div>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-blue-300 hover:text-blue-200 transition"
                  aria-label={`Lihat sertifikat ${cert.title}`}
                >
                  <HiOutlineEye className="text-xl" />
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-950 border border-slate-800 p-4 rounded-2xl shadow-xl max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-slate-400 hover:text-white text-2xl"
                onClick={() => setSelectedCert(null)}
              >
                &times;
              </button>

              <h3 className="text-lg font-semibold mb-4 text-center text-blue-300">{selectedCert.title}</h3>

              <div className="flex justify-center">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={900}
                  height={650}
                  className="rounded-xl border border-slate-800"
                />
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  )
}