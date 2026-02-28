'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const contacts = [
  {
    icon: <FaEnvelope className="text-blue-300 text-xl" />,
    label: 'Email',
    value: 'christopher.ciayadi2511@gmail.com',
    link: 'mailto:christopher.ciayadi2511@gmail.com',
  },
  {
    icon: <FaPhoneAlt className="text-blue-300 text-xl" />,
    label: 'Phone',
    value: '+62 899 1657 225',
    link: 'https://wa.me/628991657225',
  },
  {
    icon: <FaLinkedin className="text-blue-300 text-xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jasonchristopher25',
    link:  'https://www.linkedin.com/in/jasonchristopher25/',
  },
  {
    icon: <FaGithub className="text-blue-300 text-xl" />,
    label: 'GitHub',
    value: 'github.com/jasontjia',
    link: 'https://github.com/jasontjia',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-950 text-slate-200 border-t border-slate-800">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact</h2>
        <p className="text-slate-400 mb-12">
          Tertarik bekerja sama atau ingin berdiskusi? Silakan hubungi saya melalui salah satu kontak di bawah ini.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition"
            >
              <div className="flex-shrink-0">{contact.icon}</div>
              <div>
                <p className="text-sm text-slate-400">{contact.label}</p>
                <p className="text-slate-200 font-medium">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}