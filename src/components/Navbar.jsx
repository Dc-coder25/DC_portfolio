import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // On descend → cacher la nav
        setVisible(false)
      } else {
        // On remonte → montrer la nav
        setVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div 
      className={`fixed top-0 left-0 right-0 flex justify-center z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar bg-white shadow-md rounded-xl w-[80%] mt-4">
        <div className="px-4 flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-1">
            <p className="normal-case text-xl font-bold tracking-wide">
              DC-coder25
            </p>
          </div>

          {/* Menu */}
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li><a href="#" className="hover:text-primary">Accueil</a></li>
              <li><a href="#projects" className="hover:text-primary">Projets</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
