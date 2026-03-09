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
    },
    {
      title: "Quiz App",
      description: "Application de quiz interactive réalisée avec HTML, CSS et JavaScript. Permet de tester ses connaissances avec un score dynamique.",
      techs: [
        { src: "/icons/html5.svg", alt: "HTML5" },
        { src: "/icons/css.svg", alt: "CSS" },
        { src: "/icons/javascript.svg", alt: "JavaScript" }
      ],
      github: "https://github.com/Dc-coder25/dc-quizapp",
      image: "/img/Quiz.png",
      status: "En cours"
    }
  ]

  return (
    <section className="w-full bg-base-100 h-screen flex flex-col justify-center px-8" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
      <div className="grid md:grid-cols-3 gap-8 w-[80%] mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card bg-base-200 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2 border border-base-300 h-[380px]"
          >
            <figure>
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-40 w-full object-cover rounded-t-xl" 
              />
            </figure>
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <h3 className="card-title text-base">{project.title}</h3>
                <span 
                  className={`badge ${project.status === "En cours" ? "badge-warning" : "badge-success"}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-xs opacity-80">{project.description}</p>
              <div className="flex gap-2 mt-2">
                {project.techs.map((tech, i) => (
                  <img 
                    key={i} 
                    src={tech.src} 
                    alt={tech.alt} 
                    className="w-5 h-5 transition-transform duration-300 hover:scale-110" 
                  />
                ))}
              </div>
              <div className="card-actions flex-col items-start mt-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline btn-xs flex items-center gap-2"
                  >
                    <img src='/icons/github.svg' alt='GitHub' className="w-3 h-3" />
                    GitHub
                  </a>
                )}
                {project.demo && !project.demoLinks && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-xs"
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
                    className="btn btn-primary btn-xs w-full"
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
