'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { FaCode, FaDatabase, FaFileAlt, FaPhp, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { SiBootstrap, SiFlask, SiMysql, SiMariadb } from 'react-icons/si'
import { JSX } from 'react'

type Project = {
  title: string
  category: string
  role: string
  description: string
  link: string
  repo: string
  image: string
  tech: { name: string; icon: JSX.Element }[]
}

const projects: Project[] = [
  {
    title: 'Enterprise Business Application Support',
    category: 'PT. Indomobil Finance Indonesia (Des 2025 - Sekarang)',
    role: 'IT Support Business Application',
    description:
      'Maintenance, troubleshooting, enhancement minor, monitoring aplikasi bisnis internal berbasis ASP.Net, C#, Visual Basic, pengelolaan query MS SQL Server, dan pembuatan report menggunakan MS RDLC.',
    link: '#',
    repo: '',
    image: '/projects/IMFI.jpg',
    tech: [
      { name: 'ASP.Net', icon: <FaCode className="text-blue-300" /> },
      { name: 'C#', icon: <FaCode className="text-blue-300" /> },
      { name: 'Visual Basic', icon: <FaCode className="text-blue-300" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-blue-300" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-300" /> },
      { name: 'JavaScript', icon: <FaJs className="text-blue-300" /> },
      { name: 'MS SQL Server', icon: <FaDatabase className="text-blue-300" /> },
      { name: 'MS Report Designer', icon: <FaFileAlt className="text-blue-300" /> },
      { name: 'MS Report Builder', icon: <FaFileAlt className="text-blue-300" /> },
      { name: 'Testing/Debug', icon: <HiOutlineClipboardList className="text-blue-300" /> },
    ],
  },
  {
    title: 'Aplikasi Pengenalan Emosi Manusia melalui Suara (SVM)',
    category: 'Skripsi (Jan-Jun 2024)',
    role: 'Project (Research)',
    description:
      'Aplikasi pengenalan emosi melalui suara menggunakan algoritma Support Vector Machine (SVM) dengan Python dan Flask.',
    link: '#',
    repo: 'https://github.com/jasontjia/emodetect-svm',
    image: '/projects/Beranda.png',
    tech: [
      { name: 'Python', icon: <FaPython className="text-blue-300" /> },
      { name: 'Flask', icon: <SiFlask className="text-blue-300" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-blue-300" /> },
      { name: 'Git', icon: <FaGitAlt className="text-blue-300" /> },
    ],
  },

  {
    title: 'Website Toko Asia Jaya Motor',
    category: 'Internship (Jun–Aug 2023)',
    role: 'Full Stack Developer Intern',
    description:
      'Website toko berbasis Bootstrap, PHP, JavaScript, serta database relasional MySQL/MariaDB untuk produk, stok, dan transaksi (CRUD).',
    link: '#',
    repo: 'https://github.com/jasontjia/aplikasi-pengelolaan',
    image: '/projects/AJM.jpg',
    tech: [
      { name: 'Bootstrap', icon: <SiBootstrap className="text-blue-300" /> },
      { name: 'PHP', icon: <FaPhp className="text-blue-300" /> },
      { name: 'JavaScript', icon: <FaJs className="text-blue-300" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-300" /> },
      { name: 'Git', icon: <FaGitAlt className="text-blue-300" /> },
      { name: 'Testing/Debug', icon: <HiOutlineClipboardList className="text-blue-300" /> },
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return () => {
    document.body.style.overflow = 'auto'
  }
}, [selectedProject])
  return (
    <section id="projects" className="py-20 px-4 bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white text-center"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-12"
        >
          Ringkasan project enterprise, internship, dan skripsi yang relevan dengan aplikasi bisnis & web development.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition flex flex-col"
            >
              <div className="relative w-full aspect-video bg-slate-900 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-xs text-blue-300 mb-1">{project.category}</p>
                <p className="text-sm text-slate-300 font-medium mb-3">{project.role}</p>

                {/* keep card tidy */}
                <p className="text-sm text-slate-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      title={t.name}
                      className="inline-flex items-center gap-1 bg-slate-950/40 border border-slate-800 px-3 py-1 rounded-full text-xs text-slate-200 hover:border-blue-500/30 transition"
                    >
                      <span className="text-base">{t.icon}</span>
                      <span>{t.name}</span>
                    </span>
                  ))}
                </div>

                {/* Links (prevent open modal when clicking links) */}
                <div className="mt-auto flex gap-5 justify-start text-sm font-medium">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-300 hover:text-blue-200 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repo && project.repo !== '#' && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-300 hover:text-blue-200 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden"
              >
                {/* Modal Image */}
                <div className="relative w-full h-56 sm:h-64">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-800 text-slate-200 hover:border-blue-500/40 transition flex items-center justify-center"
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-blue-300 text-sm mb-1">{selectedProject.category}</p>
                  <p className="text-slate-300 font-medium mb-4">{selectedProject.role}</p>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-slate-900/50 border border-slate-800 px-3 py-1 rounded-full text-xs text-slate-200"
                      >
                        <span className="text-base">{t.icon}</span>
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 text-sm font-medium">
                    {selectedProject.link !== '#' && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition"
                      >
                        Live Demo
                      </a>
                    )}
                    {selectedProject.repo && selectedProject.repo !== '#' && (
                      <a
                        href={selectedProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}