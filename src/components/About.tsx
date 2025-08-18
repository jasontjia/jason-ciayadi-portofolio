'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 text-gray-800 dark:text-white"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Judul */}
        <h2 className="text-3xl font-bold mb-6">Tentang Saya</h2>

        {/* Personal Branding */}
        <p className="text-lg leading-relaxed mb-8">
          Saya seorang <span className="font-semibold text-blue-600 dark:text-blue-400">Frontend Developer</span>{" "}
          dengan fokus ke <span className="font-semibold">UI/UX modern</span> dan pengalaman 
          membangun aplikasi full stack menggunakan <span className="font-semibold">React, Bootstrap, Flask, dan Tailwind CSS</span>.  
          Passion saya adalah menciptakan tampilan yang <span className="italic">clean, responsif, dan mudah digunakan</span>.
        </p>


        {/* Highlight singkat */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          {[
            'Magang Full Stack Developer – Toko Asia Jaya Motor (2023)',
            'Proyek Skripsi: Pengenalan Emosi via Suara (SVM)',
            'Mini Project: Cuacify (React + REST API)',
            'Mini Project: Futsal Booking (Laravel + Inertia + Tailwind + Vue)'
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
