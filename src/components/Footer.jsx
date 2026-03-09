import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300" id='contact'>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        
        {/* Image à gauche */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img 
            src="/img/contact.jpg" 
            alt="Contact illustration" 
            className="w-full max-w-xs rounded-xl shadow-lg"
          />
        </div>

        {/* Contenu à droite */}
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          
          {/* Bloc Contact + Liens rapides */}
          <div className="bg-primary text-white rounded-xl p-8 flex flex-col md:flex-row justify-between gap-8">
            
            {/* Contact */}
            <div className="space-y-4 flex-1">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                {/* GitHub */}
                <div className="flex items-center gap-3">
                  <a href="https://github.com/Dc-coder25" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/github.svg" alt="GitHub" className="w-7 h-7 hover:scale-110 transition-transform" />
                  </a>
                  <span className="text-sm">Dc-coder25</span>
                </div>
                {/* Email */}
                <div className="flex items-center gap-3">
                  <a href="mailto:tolotrarandria25@gmail.com">
                    <img src="/icons/gmail.svg" alt="Email" className="w-7 h-7 hover:scale-110 transition-transform" />
                  </a>
                  <span className="text-sm">tolotrarandria25@gmail.com</span>
                </div>
                {/* Téléphone */}
                <div className="flex items-center gap-3">
                  <a href="tel:+261334253196">
                    <img src="/icons/phone.svg" alt="Téléphone" className="w-7 h-7 hover:scale-110 transition-transform" />
                  </a>
                  <span className="text-sm">+261 33 42 531 96</span>
                </div>
              </div>
            </div>

            {/* Liens rapides */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#projects" className="hover:text-secondary transition-colors">Accueil</a></li>
                <li><a href="#about" className="hover:text-secondary transition-colors">Projets</a></li>
              </ul>
            </div>
          </div>

          {/* À propos en dessous */}
          <div>
            <h3 className="text-lg font-bold mb-4">À propos</h3>
            <p className="text-sm opacity-80 leading-relaxed max-w-md">
              Portfolio développé avec React, Vite, TailwindCSS et DaisyUI. 
              Déployé sur Vercel pour présenter mes projets web.
            </p>
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-base-300 pt-6 pb-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Dc-coder25 – Tolotra Randrianarimalala. Tous droits réservés.
      </div>
    </footer>
  )
}
