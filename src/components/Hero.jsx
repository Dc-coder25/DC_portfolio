import React from 'react'

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Image de présentation */}
        <img src="/portrait.png" className="max-w-sm rounded-lg shadow-2xl" alt="portrait" />
        
        {/* Texte d’introduction */}
        <div>
          <h1 className="text-5xl font-bold">Salut, je suis Jean</h1>
          <p className="py-6">
            Développeur web passionné, spécialisé en React, TailwindCSS et DaisyUI.
            Je crée des interfaces modernes et performantes.
          </p>
          <button className="btn btn-primary">Voir mes projets</button>
        </div>
      </div>
    </div>
  )
}
