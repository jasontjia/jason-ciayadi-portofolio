export default function Footer() {
  return (
    <footer className="text-center py-4 fixed bottom-0 left-0 w-full shadow-md z-50">
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} Jason Christopher Ciayadi. All rights reserved.
      </p>
    </footer>
  )
}