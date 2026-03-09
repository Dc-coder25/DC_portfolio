import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Notes App",
      description: "Application de prise de notes construite avec React + Vite, TailwindCSS et DaisyUI. Projet en cours de développement et déployé sur Vercel.",
      techs: [
        { src: "/icons/react.svg", alt: "React" },
        { src: "/icons/vite.svg", alt: "Vite" },
        { src: "/icons/tailwindcss.svg", alt: "TailwindCSS" },
        { src: "/icons/daisyui.svg", alt: "DaisyUI" }
      ],
      github: "https://github.com/Dc-coder25/Dc_NotesApp",
      demo: "https://dcnotes-app.vercel.app/",
      image: "/img/Dc_Notes-app.png",
      status: "En cours"
    },
    {
      title: "Stage chez Bienfé",
      description: "Création et personnalisation de sites avec WordPress et Elementor durant mon stage chez Bienfé.",
      techs: [
        { src: "/icons/wordpress.svg", alt: "WordPress" },
        { src: "/icons/php.svg", alt: "PHP" },
        { src: "/icons/elementor.svg", alt: "Elementor" }
      ],
      demoLinks: [
        { name: "Site 1", url: "https://www.weboptimise.fr/" },
        { name: "Site 2", url: "https://www.l-annonceur.fr/" },
        { name: "Site 3", url: "https://www.agence-efficace.fr/" }
      ],
      image: "/img/Freepik.jpg",
      status: "Terminé"
    }
  ]

  return (
    <section className="w-full bg-base-100 py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Mes Projets</h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 border border-base-300"
          >
            <figure>
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-56 w-full object-cover rounded-t-xl" 
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h3 className="card-title">{project.title}</h3>
                <span 
                  className={`badge ${project.status === "En cours" ? "badge-warning" : "badge-success"}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm opacity-80">{project.description}</p>
              <div className="flex gap-3 mt-3">
                {project.techs.map((tech, i) => (
                  <img 
                    key={i} 
                    src={tech.src} 
                    alt={tech.alt} 
                    className="w-6 h-6 transition-transform duration-300 hover:scale-110" 
                  />
                ))}
              </div>
              <div className="card-actions flex-col items-start mt-6">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline btn-sm flex items-center gap-2"
                  >
                    <img src='/icons/github.svg' alt='GitHub' className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.demo && !project.demoLinks && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                )}
                {project.demoLinks && project.demoLinks.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-sm w-full"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
