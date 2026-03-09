import React from 'react'

export default function Hero() {
  return (
    <section className="hero h-[calc(100vh-64px)] bg-gradient-to-r from-base-200 via-base-100 to-base-200">
      <div className="hero-content flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
        
        {/* Avatar professionnel */}
        <div className="flex items-center justify-center">
          <img 
            src="." 
            alt="Portrait professionnel" 
            className="w-64 h-auto object-contain rounded-xl shadow-2xl border-4 border-primary" 
          />
        </div>

        {/* Texte d’introduction */}
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Randrianarimalala Tolotra
          </h1>
          <h2 className="text-xl font-semibold text-secondary mb-5">
            Développeur Web & Communication Digitale
          </h2>
          <p className="text-base leading-relaxed mb-6">
            Jeune professionnel motivé et passionné par le numérique.  
            J’aime relever de nouveaux défis et contribuer à des projets variés avec sérieux et enthousiasme.  
            Organisé, curieux et doté d’un bon esprit d’équipe, je m’investis pleinement pour offrir des solutions modernes et efficaces.  
            Mon objectif est de continuer à développer mes connaissances et à apporter une valeur ajoutée dans le domaine du digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#projects" className="btn btn-primary btn-md">Voir mes projets</a>
            <a href="/CV_Tolotra_Randria.pdf" className="btn btn-outline btn-md" download>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
