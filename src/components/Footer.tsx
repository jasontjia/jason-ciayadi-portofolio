export default function Footer() {
  return (
    <footer className="py-8 text-center bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <p>
        © {new Date().getFullYear()} Jason Christopher. All rights reserved.
      </p>
    </footer>
  )
}