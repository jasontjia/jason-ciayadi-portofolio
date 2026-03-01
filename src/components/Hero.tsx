'use client'

import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    if (!isClient) return
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isClient, mouseX, mouseY])

  const rotateX = useTransform(mouseY, [0, isClient ? window.innerHeight : 1], [-8, 8])
  const rotateY = useTransform(mouseX, [0, isClient ? window.innerWidth : 1], [8, -8])
  const scale = useTransform(mouseY, [0, isClient ? window.innerHeight : 1], [1, 1.03])

  return (
    <section id="hero" className="relative min-h-screen px-4 sm:px-8 md:px-20 bg-slate-950 text-slate-200 overflow-hidden">
      {/* Subtle background */}
      {isClient && (
        <>
          <motion.div
            style={{ x: rotateY, y: rotateX }}
            className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            style={{ x: rotateY, y: rotateX }}
            className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-400/10 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40" />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Photo */}
{isClient ? (
  <motion.div
    style={{ rotateX, rotateY, scale }}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="relative flex justify-center md:justify-start"
  >
    <div className="relative w-64 sm:w-72 md:w-80 aspect-[3/4]">
      
      {/* Frame */}
      <div className="absolute inset-0 rounded-2xl border border-blue-500/20 bg-slate-900/30 backdrop-blur-sm" />

      {/* Image */}
      <Image
        src="/projects/jason-it.png"
        alt="Foto Jason"
        fill
        className="object-contain rounded-2xl p-6 relative z-10"
        sizes="(max-width: 768px) 60vw, 320px"
        priority
      />
        </div>
      </motion.div>
    ) : (
      <div className="w-64 aspect-[3/4] bg-slate-800 rounded-2xl mx-auto" />
    )}

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <p className="text-sm text-blue-300/90 font-medium mb-3">
            IT Support Business Application
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Jason Christopher
          </h1>

          <p className="text-slate-300 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            Berpengalaman dalam maintenance & incident handling aplikasi bisnis internal.
            Fokus pada troubleshooting, testing, debugging, dan pengelolaan data menggunakan{' '}
            <span className="font-semibold text-blue-300">MS SQL Server</span>. Tech stack utama:{' '}
            <span className="font-semibold text-blue-300">ASP.NET, C#, Visual Basic</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition shadow-sm"
            >
              Lihat Proyek
            </a>

            <a
              href="/CV_JasonChristopherCiayadi.pdf"
              download
              className="px-5 py-3 rounded-xl border border-slate-700 hover:border-blue-500/40 hover:bg-blue-500/10 text-slate-200 font-medium transition"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-400">
            Jakarta Timur · Available for collaboration
          </div>
        </motion.div>
      </div>

      <div className="border-t border-slate-800" />
    </section>
  )
}