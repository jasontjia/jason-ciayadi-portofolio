'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiOutlineClipboardList } from 'react-icons/hi'
// icons
import { FaReact, FaPhp, FaLaravel, FaPython, FaJs, FaHtml5, FaGithub } from 'react-icons/fa'
import { 
  SiTailwindcss, SiFlask, SiMysql, SiMariadb, SiVuedotjs, SiFigma, SiTypescript,
  SiBootstrap, SiVite, SiVercel, SiInertia, SiDocker
} from 'react-icons/si'
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
    title: 'Website Toko Asia Jaya Motor',
    category: 'Internship (2023)',
    role: 'Full Stack Developer',
    description:
      'Sistem CRUD produk & transaksi untuk toko sparepart motor. Dibangun dengan PHP, Bootstrap, JavaScript, dan basis data MySQL/MariaDB.',
    link: '#',
    repo: 'https://github.com/jasontjia/aplikasi-pengelolaan',
    image: '/projects/barangmasuk_pemilik.png',
    tech: [
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
      { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-700" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'RAD', icon: <HiOutlineClipboardList className="text-yellow-400" /> },
    ],
  },
  {
    title: 'Aplikasi POS MJ Laundry',
    category: 'Project (2025)',
    role: 'Full Stack Developer',
    description:
      'Aplikasi Point of Sales (POS) untuk MJ Laundry dengan fitur manajemen transaksi, filter, sorting, pagination, dan live update real-time menggunakan Prisma.',
    link: '#',
    repo: 'https://github.com/jasontjia/MJ_Laundry-App.git',
    image: '/projects/orders.png',
    tech: [
      { name: 'Next.js', icon: <FaReact className="text-gray-200" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'Prisma', icon: <SiVercel className="text-white" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-200" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
    ],
  },
  {
    title: 'Aplikasi Pengenalan Emosi Manusia melalui Suara',
    category: 'Skripsi (2024)',
    role: 'AI Engineer',
    description:
      'Aplikasi deteksi emosi manusia melalui suara menggunakan metode SVM. Hasil penelitian menunjukkan akurasi 92%.',
    link: '#',
    repo: 'https://github.com/jasontjia/emodetect-svm',
    image: '/projects/Form-SingleAudio.png',
    tech: [
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
      { name: 'RAD', icon: <HiOutlineClipboardList className="text-yellow-400" /> },
    ],
  },
  {
    title: 'Futsal Booking App',
    category: 'Project (2025)',
    role: 'Full Stack Developer',
    description:
      'Aplikasi penyewaan lapangan futsal berbasis web dengan sistem booking online. Dibangun dengan Laravel, Inertia.js, Vue.js, dan TailwindCSS.',
    link: '#',
    repo: 'https://github.com/jasontjia/futsal-booking.git',
    image: '/projects/home.png',
    tech: [
      { name: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
      { name: 'Inertia.js', icon: <SiInertia className="text-indigo-500" /> },
      { name: 'Vue.js', icon: <SiVuedotjs className="text-green-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    ],
  },
  {
    title: 'Cuacify',
    category: 'Project (2025)',
    role: 'Frontend Developer',
    description:
      'Aplikasi cuaca modern menggunakan OpenWeather API. Dibangun dengan React.js, TailwindCSS, Vite.js, dan dideploy menggunakan Vercel.',
    link: 'https://cuacify-vite.vercel.app/',
    repo: 'https://github.com/jasontjia/cuacify-vite',
    image: '/projects/cuacify-main.png',
    tech: [
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Vite.js', icon: <SiVite className="text-purple-500" /> },
      { name: 'Vercel', icon: <SiVercel className="text-white" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-200" /> },
    ],
  },
  {
    title: 'Aplikasi Rekomendasi Online Shops',
    category: 'Project (2023)',
    role: 'Frontend Developer',
    description:
      'Aplikasi pendukung keputusan berbasis web menggunakan metode AHP untuk menentukan online shop terbaik.',
    link: '#',
    repo: 'https://github.com/jasontjia/SPK-OnlineShops.git',
    image: '/projects/rekom-shops.png',
    tech: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
      { name: 'Agile', icon: <HiOutlineClipboardList className="text-green-400" /> },
    ],
  },
  {
    title: 'Aplikasi ReCom',
    category: 'UI/UX Project (2023)',
    role: 'UI/UX Designer',
    description:
      'Desain antarmuka aplikasi penyewaan baju berbasis web. Prototype dibuat dengan Figma.',
    link: 'https://www.figma.com/design/okPLQjxUIq7Wt2m2vZPLno/PROTOTYPE-RECOM',
    repo: '',
    image: '/projects/Desktop-2.png',
    tech: [{ name: 'Figma', icon: <SiFigma className="text-pink-500" /> }],
  },
]

export default function Projects() {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Frontend Developer':
        return 'text-green-400'
      case 'Fullstack Developer':
        return 'text-orange-400'
      case 'UI/UX Designer':
        return 'text-pink-400'
      case 'AI Engineer':
        return 'text-yellow-400'
      default:
        return 'text-cyan-300'
    }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-950 via-blue-950 to-cyan-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-14 text-white"
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
            slideShadows: false,
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
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                }}
                className="bg-gray-900 text-gray-200 rounded-2xl shadow-md overflow-hidden border border-gray-800 transition-all"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-blue-400 mb-1">{project.category}</p>
                  <p className={`text-sm font-medium mb-3 ${getRoleColor(project.role)}`}>
                    {project.role}
                  </p>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {project.tech.map((t, i) => (
                      <div
                        key={i}
                        title={t.name}
                        className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-200 hover:bg-gray-700 transition"
                      >
                        <span className="text-lg">{t.icon}</span>
                        <span>{t.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-5 justify-center text-sm font-medium">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-blue-400 hover:underline"
                      >
                        🔗 Live Demo
                      </a>
                    )}
                    {project.repo && project.repo !== '#' && (
                      <a
                        href={project.repo}
                        target="_blank"
                        className="text-blue-400 hover:underline"
                      >
                        💻 GitHub
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