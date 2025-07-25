'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'

// Project Type
type Project = {
  title: string
  description: string
  link: string
  repo: string
  image: string
}

// Project Data
const projects: Project[] = [
  {
    title: 'Cuacify',
    description: 'Aplikasi cuaca modern menggunakan React.js, Tailwind CSS, dan OpenWeatherMap API.',
    link: 'https://cuacify-vite.vercel.app/',
    repo: 'https://github.com/jasontjia/cuacify-vite',
    image: '/projects/cuacify-main.png'
  },
  {
    title: 'Aplikasi Pengenalan Emosi',
    description: 'Projek skripsi deteksi emosi manusia melalui suara menggunakan SVM. Akurasi: 92%.',
    link: '#',
    repo: 'https://github.com/jasontjia/emodetect-svm',
    image: '/projects/Form-SingleAudio.png'
  },
  {
    title: 'Website Toko Asia Jaya Motor',
    description: 'Sistem CRUD produk dan transaksi. Dibuat dengan PHP, MySQL, dan Bootstrap.',
    link: '#',
    repo: 'https://github.com/jasontjia/aplikasi-pengelolaan',
    image: '/projects/barangmasuk_pemilik.png'
  }
]

// Component
export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          effect="fade"
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="!pb-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-left">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                <p className="mb-4 text-sm text-center">{project.description}</p>
                <div className="flex gap-4 justify-center">
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                  )}
                  {project.repo !== '#' && (
                    <a href={project.repo} target="_blank" className="text-blue-500 hover:underline">GitHub</a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}