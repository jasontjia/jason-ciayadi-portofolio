'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Silakan hubungi saya melalui email atau media sosial di bawah ini:
        </p>

        <div className="space-y-4 text-left">
          {/* Email */}
          <div className="flex items-center gap-3 p-4 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <FaEnvelope className="text-xl text-blue-500" />
            <a href="mailto:christopher.ciayadi2511@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline break-all">
              christopher.ciayadi2511@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-3 p-4 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <FaGithub className="text-xl text-gray-800 dark:text-white" />
            <a href="https://github.com/jasontjia" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
              github.com/jasontjia
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 p-4 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <FaLinkedin className="text-xl text-blue-700" />
            <a
              href="https://linkedin.com/in/jason-christopher-ciayadi-2038542b2"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/jason-christopher-ciayadi-2038542b2
            </a>
          </div>
          {/* WhatsApp Button */}
            <a
              href="https://wa.me/628991657225"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-md transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48a12.22 12.22 0 00-17.3 0 12.17 12.17 0 00-2.93 13l-1.3 4.7a1 1 0 001.2 1.2l4.7-1.3a12.17 12.17 0 0013-2.93 12.22 12.22 0 000-17.3zm-8.28 15a9.3 9.3 0 01-4.45-1.15l-.32-.19-2.63.73.7-2.55-.21-.33A9.17 9.17 0 1120.4 8.1a9.3 9.3 0 01-8.16 10.38zm5-6.44l-.85-.42c-.23-.12-.4-.19-.57.1l-.41.57c-.12.17-.23.34-.5.28a6.59 6.59 0 01-3.86-3.9c-.06-.25.1-.37.26-.49l.53-.4a.56.56 0 00.25-.51l-.16-.94c-.07-.38-.28-.45-.52-.45h-.45a.92.92 0 00-.68.3A2.64 2.64 0 007.6 8.46c0 1.53.9 3.05 2.06 4.14a8.47 8.47 0 004.7 2.1c.3 0 .55 0 .76-.1a2.2 2.2 0 001.2-1.42c.06-.18.06-.34-.12-.44z" />
              </svg>
              Chat via WhatsApp
            </a>
        </div>
      </motion.div>
    </section>
  )
}
