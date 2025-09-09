'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const contacts = [
  {
    icon: <FaEnvelope className="text-red-400 text-xl" />,
    label: 'Email',
    value: 'christopher.ciayadi2511@gmail.com',
    link: 'mailto:christopher.ciayadi2511@gmail.com',
  },
  {
    icon: <FaPhoneAlt className="text-green-400 text-xl" />,
    label: 'Phone',
    value: '+62 899 1657 225',
    link: 'https://wa.me/628991657225',
  },
  {
    icon: <FaLinkedin className="text-blue-500 text-xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jason-christopher-ciayadi-2038542b2',
    link: 'https://linkedin.com/in/jason-christopher-ciayadi-2038542b2',
  },
  {
    icon: <FaGithub className="text-gray-300 text-xl" />,
    label: 'GitHub',
    value: 'github.com/jasontjia',
    link: 'https://github.com/jasontjia',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-gray-200">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Contact Me
        </h2>
        <p className="text-gray-400 mb-12">
          Tertarik bekerja sama atau ingin berdiskusi? Silakan hubungi saya melalui salah satu kontak di bawah ini.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition shadow"
            >
              <div>{contact.icon}</div>
              <div>
                <p className="text-sm text-gray-400">{contact.label}</p>
                <p className="text-white font-medium">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}