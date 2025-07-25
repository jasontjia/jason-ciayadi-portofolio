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
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Teks Utama */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="mb-4 leading-relaxed"> Lulusan baru dari Jurusan Teknik Informatika Universitas Katolik De La Salle Manado (IPK 3,75) dengan minat besar di bidang pengembangan perangkat lunak dan analisis sistem. Memiliki pengalaman dalam proyek web berbasis PHP, Python, Javascript, dan MariaDB, serta terampil dalam web programming menggunakan Bootstrap, Tailwind CSS, dan Flask. Terbiasa bekerja dalam tim, memimpin proyek, dan siap berkontribusi di industri teknologi informasi.</p>
          <a
            href="https://linkedin.com/in/jason-christopher-ciayadi-2038542b2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 underline hover:opacity-80"
          >
            Lihat profil LinkedIn →
          </a>
        </div>

        {/* Pengalaman */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Pengalaman Singkat</h3>
          <ul className="space-y-4">
            {[
              'Magang Full Stack Developer di Asia Jaya Motor (Jun–Aug 2023)',
              'Proyek Skripsi: Pengenalan Emosi melalui Suara (SVM)',
              'Mini Project: Cuacify – Aplikasi Cuaca (React + REST API)'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
