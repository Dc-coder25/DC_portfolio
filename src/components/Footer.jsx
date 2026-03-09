import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-4xl mx-auto px-6 py-10 text-center space-y-10">
        
        {/* À propos */}
        <div>
          <h3 className="text-lg font-bold mb-4">À propos</h3>
          <p className="text-sm opacity-80 leading-relaxed max-w-md mx-auto">
            Portfolio développé avec React, Vite, TailwindCSS et DaisyUI. 
            Déployé sur Vercel pour présenter mes projets web.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#projects" className="hover:text-primary transition-colors">Projets</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-bold mb-4">Réseaux</h3>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Dc-coder25" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:tolotrarandria25@gmail.com">
              <img src="/icons/gmail.svg" alt="Email" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-base-300 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Dc-coder25 – Tolotra Randrianarimalala. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
