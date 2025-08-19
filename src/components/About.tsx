'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function About() {
  const highlights = [
    'Magang Full Stack Developer – Toko Asia Jaya Motor (2023)',
    'Proyek Skripsi: Pengenalan Emosi via Suara (SVM)',
    'Mini Project: Cuacify (React + REST API)',
    'Mini Project: Futsal Booking (Laravel + Inertia + Vue + Tailwind)'
  ]

  return (
    <section
      id="about"
      className="py-20 px-6 text-white"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Judul */}
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Tentang Saya
        </h2>

        {/* Personal Branding */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Membangun Web <span className="text-blue-600 dark:text-blue-400">Modern</span>,  
          <br className="hidden sm:block" />
          <span className="italic">Responsif</span>, & <span className="font-semibold">User-Friendly</span>
        </motion.h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Fresh Graduate Teknik Informatika dengan minat di <strong>Frontend & Fullstack Development</strong>.  
          Berfokus pada <span className="font-medium">React, Vue, Laravel, Bootstrap dan TailwindCSS</span><br></br>
          untuk menciptakan pengalaman web yang sederhana namun impactful.
        </p>

        {/* Highlight Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
