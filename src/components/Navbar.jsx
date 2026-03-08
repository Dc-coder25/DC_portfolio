import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Logo / Branding */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl font-bold tracking-wide">
          MonPortfolio
        </a>
      </div>

      {/* Menu principal */}
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><a className="hover:text-primary">Projets</a></li>
          <li><a className="hover:text-primary">À propos</a></li>
          <li><a className="hover:text-primary">Contact</a></li>
        </ul>
      </div>

      {/* Bouton d’action */}
      <div className="flex-none">
        <button className="btn btn-primary">Engagez-moi</button>
      </div>
    </div>
  )
}
