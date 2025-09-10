'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaProjectDiagram, FaGraduationCap } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

export default function About() {
  const experiences = [
    {
      title: 'Magang Full Stack Developer',
      place: 'Toko Asia Jaya Motor',
      year: '2023',
      icon: <MdWork className="text-blue-400 text-xl" />,
    },
    {
      title: 'Proyek Skripsi',
      place: 'Aplikasi Pengenalan Emosi via Suara (SVM)',
      year: '2024',
      icon: <FaGraduationCap className="text-yellow-400 text-xl" />,
    },
    {
      title: 'Mini Project',
      place: 'Cuacify – Aplikasi Cuaca (React + REST API)',
      year: '2025',
      icon: <FaProjectDiagram className="text-green-400 text-xl" />,
    },
    {
      title: 'Mini Project',
      place: 'Futsal Booking (Laravel + Inertia + Vue + Tailwind)',
      year: '2025',
      icon: <FaLaptopCode className="text-pink-400 text-xl" />,
    },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-950 via-blue-950 to-cyan-900 text-gray-300">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          About Me
        </h2>
        <p className="text-xl font-semibold text-blue-400 mb-8">
          Membangun Web Modern, Responsif, & User-Friendly
        </p>
        <p className="text-lg leading-relaxed mb-12">
          Fresh Graduate Teknik Informatika dengan fokus pada{' '}
          <span className="font-semibold text-blue-400">Frontend</span> &{' '}
          <span className="font-semibold text-purple-400">Fullstack Development</span>.  
          Berpengalaman menggunakan{' '}
          <span className="font-semibold text-cyan-400">React</span>,{' '}
          <span className="font-semibold text-green-400">Vue</span>,{' '}
          <span className="font-semibold text-red-400">Laravel</span>,{' '}
          <span className="font-semibold text-pink-400">TailwindCSS</span>, dan{' '} 
          <span className="font-semibold text-red-600">Bootstrap</span>{' '}untuk membangun
          aplikasi web sederhana namun <span className="italic text-yellow-300">impactful</span>.
        </p>

        {/* Experience List */}
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-5 bg-gray-900 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">{exp.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                <p className="text-sm text-gray-400">{exp.place}</p>
                <span className="text-xs text-gray-500">{exp.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}