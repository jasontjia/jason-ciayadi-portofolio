'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full shadow z-50">
      <ul className="flex justify-center space-x-6 p-4 font-medium">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
