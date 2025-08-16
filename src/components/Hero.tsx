'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center px-4 text-white"
    >
      <div className="text-center max-w-2xl">
        {/* Foto Profil */}
        <Image
          src="/projects/jason.jpeg"
          alt="Foto Jason"
          width={150}
          height={150}
          className="rounded-full border-4 border-white shadow-lg mx-auto mb-6"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Hi, I&#39;m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Jason Christopher Ciayadi
          </span>{" "}
          👋
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Frontend Developer • Full Stack Developer
        </p>

        {/* Tombol CTA */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#projects"
            className="px-6 py-2 bg-white text-blue-600 font-medium rounded shadow hover:bg-blue-100 transition"
          >
            Lihat Proyek
          </a>
          <a
            href="/CV-Jason Christopher Ciayadi.pdf"
            download
            className="px-6 py-2 border border-white text-white font-medium rounded hover:bg-white hover:text-blue-600 transition"
          >
            Download CV
          </a>
        </div>

        {/* Sosial Media */}
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/jasontjia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            🐙 GitHub
          </a>
          <a
            href="https://linkedin.com/in/jason-christopher-ciayadi-2038542b2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
