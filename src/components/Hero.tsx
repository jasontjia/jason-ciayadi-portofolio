'use client'

import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  const rotateX = useTransform(mouseY, [0, isClient ? window.innerHeight : 1], [-10, 10])
  const rotateY = useTransform(mouseX, [0, isClient ? window.innerWidth : 1], [10, -10])
  const scale = useTransform(mouseY, [0, isClient ? window.innerHeight : 1], [1, 1.05])

  return (
    <section className="relative min-h-screen pb-16 md:pb-24 flex flex-col-reverse md:flex-row items-center px-4 sm:px-8 md:px-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">

      {/* Bubble background interaktif */}
      {isClient && (
        <>
          <motion.div style={{ x: rotateY, y: rotateX }} className="absolute top-20 left-4 sm:top-20 sm:left-10 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl"></motion.div>
          <motion.div style={{ x: rotateY, y: rotateX }} className="absolute bottom-8 right-4 sm:bottom-10 sm:right-10 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl"></motion.div>
          <motion.div style={{ x: rotateY, y: rotateX }} className="absolute top-1/3 right-1/4 w-28 h-28 sm:w-36 sm:h-36 bg-blue-400/10 rounded-full blur-2xl"></motion.div>
          <motion.div style={{ x: rotateY, y: rotateX }} className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-48 sm:h-48 bg-purple-400/10 rounded-full blur-2xl"></motion.div>
        </>
      )}

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center z-10 w-full">

        {/* Foto cutout interaktif */}
        {isClient ? (
          <motion.div
            style={{ rotateX, rotateY, scale }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative flex justify-center md:justify-start w-full"
          >
            <motion.div style={{ rotateY, rotateX }} className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-64 sm:w-44 sm:h-72 md:w-64 md:h-[500px] border-2 border-blue-400/40 rounded-xl absolute blur-sm animate-pulse-slow shadow-[0_0_20px_rgba(59,130,246,0.4)]"></div>
              <div className="absolute w-1 h-full bg-gradient-to-b from-blue-400/50 to-transparent rotate-12 animate-bounce-slow shadow-lg"></div>
              <div className="absolute w-1 h-full bg-gradient-to-b from-purple-400/50 to-transparent -rotate-12 animate-bounce-slow shadow-lg"></div>
            </motion.div>

            <Image
              src="/projects/jason-lulus.png"
              alt="Foto Jason"
              width={260}
              height={400}
              className="w-32 h-56 sm:w-40 sm:h-64 md:w-64 md:h-[500px] object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ) : (
          <div className="w-32 h-56 sm:w-40 sm:h-64 md:w-64 md:h-[500px] bg-gray-700 rounded-xl mx-auto"></div>
        )}

        {/* Teks Hero */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left px-2 sm:px-0"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Halo, saya <span className="text-blue-400">Jason Christopher Ciayadi</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-3 sm:mb-4">
            Frontend Developer · Full Stack Developer  
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-md md:max-w-lg mx-auto md:mx-0">
            Saya memiliki passion membangun aplikasi web yang 
            <span className="font-semibold text-blue-400"> modern, responsif, dan mudah digunakan</span>. 
            Selalu bersemangat untuk belajar teknologi baru dan menciptakan solusi digital yang bermanfaat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start mb-6">
            <a
              href="#projects"
              className="w-full sm:w-auto px-5 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/50 transition text-center"
            >
              🚀 Lihat Proyek
            </a>
            <a
              href="/CV_JasonChristopherCiayadi.pdf"
              download
              className="w-full sm:w-auto px-5 py-3 border border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/50 transition text-center"
            >
              📄 CV Terbaru
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}