import React from 'react'

export default function Hero() {
  return (
    <section 
      className="hero min-h-screen bg-cover bg-center relative pt-35 pb-18" 
      style={{ backgroundImage: "url('/bg01.jpg')" }}
    >
      <div className="w-[80%] mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left z-10">
          
          {/* Avatar rond */}
          <div className="flex items-center justify-center">
            <img 
              src="/img/Avatar.jpg" 
              alt="Avatar professionnel" 
              className="w-88 h-88 object-cover rounded-full shadow-xl border-4 border-primary" 
            />
          </div>

          {/* Texte avec overlay comme fond */}
          <div className="flex-1 text-white p-8 rounded-2xl shadow-2xl bg-black/40 space-y-6">
            <h1 className="text-4xl font-bold text-white">
              Randrianarimalala Tolotra
            </h1>

            {/* Badges de compétences */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 rounded-full bg-secondary text-sm font-semibold shadow-md">
                Développement Web
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary text-sm font-semibold shadow-md">
                Intégration Web
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary text-sm font-semibold shadow-md">
                Communication
              </span>
            </div>

            <p className="text-base leading-relaxed">
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
      </div>
    </section>
  )
}
