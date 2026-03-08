import React from "react"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost text-xl">Mon Portfolio</a>
      <ul className="menu menu-horizontal px-1">
        <li><a>Projets</a></li>
        <li><a>À propos</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  )
}
