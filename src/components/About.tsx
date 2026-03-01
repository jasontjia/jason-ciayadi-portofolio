'use client'

import { motion } from 'framer-motion'
import { MdWork } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'

export default function About() {
  const experiences = [
    {
      title: 'IT Support Business Application Staff',
      place: 'PT. Indomobil Finance Indonesia — Jakarta Timur',
      year: 'Des 2025 - Sekarang',
      icon: <MdWork className="text-blue-300 text-xl" />,
    },
    {
      title: 'Full Stack Developer Intern',
      place: 'Toko Asia Jaya Motor — Manado',
      year: 'Jun 2023 - Aug 2023',
      icon: <MdWork className="text-blue-300 text-xl" />,
    },
    {
      title: 'Proyek Skripsi',
      place: 'Aplikasi Pengenalan Emosi Manusia via Audio (SVM) — Python & Flask',
      year: 'Jan 2024 - Jun 2024',
      icon: <FaGraduationCap className="text-blue-300 text-xl" />,
    },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-slate-950 text-slate-200 border-t border-slate-800">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About</h2>

        <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          Lulusan Teknik Informatika dengan pengalaman dalam maintenance, troubleshooting, testing,
          debugging, dan incident handling aplikasi internal. Terbiasa menggunakan{' '}
          <span className="font-semibold text-blue-300">ASP.NET</span>,{' '}
          <span className="font-semibold text-blue-300">C#</span>,{' '}
          <span className="font-semibold text-blue-300">Visual Basic</span>,{' '}
          <span className="font-semibold text-blue-300">HTML, CSS, JavaScript</span>, serta{' '}
          <span className="font-semibold text-blue-300">MS SQL Server</span> untuk memastikan
          aplikasi berjalan stabil dan sesuai kebutuhan operasional.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition"
            >
              <div className="flex-shrink-0">{exp.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                <p className="text-sm text-slate-400">{exp.place}</p>
                <span className="text-xs text-slate-500">{exp.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}