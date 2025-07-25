'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    {/* 🔁 Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source
        src="https://res.cloudinary.com/dxqwkrgwg/video/upload/v1753285115/background_g7u3yu.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

      {/* ✅ Konten utama */}
      <main className="relative z-10 text-black dark:text-white scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
