import  { useState } from "react"
import { NavLink } from "react-router-dom"
import { X } from "lucide-react"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/blogs", label: "Blogs" },
    { to: "/services", label: "Services" },
    { to: "/schemes", label: "DVOC & BVOC" },
    { to: "/job-portal", label: "Job Seva" },
    { to: "/lms", label: "LMS" },
    { to: "/contact", label: "Contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                src={logo || "/placeholder.svg"}
                alt="Univoc Foundation Logo"
                className="h-8 w-auto object-contain"
              />
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6 text-white" aria-hidden="true" />
              ) : (
                <div className="space-y-1.5 p-1">
                  <div className="w-6 h-0.5 bg-white rounded-full"></div>
                  <div className="w-5 h-0.5 bg-white rounded-full ml-1"></div>
                  <div className="w-6 h-0.5 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
              onClick={toggleMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

