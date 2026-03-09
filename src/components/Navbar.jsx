import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState("light")

  // Applique le thème au <html>
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Logo / Branding */}
      <div className="flex-1">
        <a href="#hero" className="btn btn-ghost normal-case text-xl font-bold tracking-wide">
          MonPortfolio
        </a>
      </div>

      {/* Menu principal */}
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><a href="#projects" className="hover:text-primary">Projets</a></li>
          <li><a href="#about" className="hover:text-primary">À propos</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex-none flex items-center gap-4">
        {/* Toggle Light/Dark */}
        <label className="swap swap-rotate">
          {/* Icône soleil */}
          <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64 17.657l-1.414 1.414L4.22 20.07l1.414-1.414zM12 4a8 8 0 100 16 8 8 0 000-16zm0-2a10 10 0 110 20 10 10 0 010-20z"/>
          </svg>
          {/* Icône lune */}
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.75 15.5A9.75 9.75 0 1112 2.25c.69 0 1.36.07 2 .21a8.25 8.25 0 007.75 13.04z"/>
          </svg>
        </label>
      </div>
    </div>
  )
}
