'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Project = {
  title: string
  description: string
  link: string
  repo: string
  image: string
}

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
  },
  {
    title: 'Aplikasi ReCom',
    description: 'Aplikasi penyewaan baju berbasis web yang dibuat menggunakan Figma untuk desain antarmukanya.',
    link: 'https://www.figma.com/design/okPLQjxUIq7Wt2m2vZPLno/PROTOTYPE-RECOM',
    repo: '',
    image: '/projects/Desktop-2.png'
  },
  {
    title: 'Futsal Booking',
    description: 'Aplikasi penyewaan lapangan futsal berbasis web dengan Laravel, Inertia, Tailwind, dan Vue.',
    link: '#',
    repo: 'https://github.com/jasontjia/futsal-booking.git',
    image: '/projects/home.png'
  },
  {
    title: 'Aplikasi Rekomendasi Online Shops',
    description: 'Aplikasi berbasis web dengan menggunakan PHP dan metode AHP dalam menentukan keputusan yang diperoleh.',
    link: '#',
    repo: 'https://github.com/jasontjia/SPK-OnlineShops.git',
    image: '/projects/rekom-shops.png'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-14 text-gray-900 dark:text-gray-100"
        >
          My Projects
        </motion.h2>

        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          speed={800}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 180,
            modifier: 2,
            slideShadows: false
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={project.title} className="max-w-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 30px rgba(0,0,0,0.2)' }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex gap-5 justify-center text-sm font-medium">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.repo !== '#' && (
                      <a
                        href={project.repo}
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
