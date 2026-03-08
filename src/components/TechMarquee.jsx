import React from 'react'

export default function TechMarquee() {
  return (
    <section className="w-full bg-base-200 py-4 overflow-hidden">
      <div className="animate-marquee flex gap-8">
        <img src="/icons/html5.svg" alt="HTML5" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/css.svg" alt="CSS" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/tailwindcss.svg" alt="TailwindCSS" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/javascript.svg" alt="JavaScript" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/daisyui.svg" alt="DaisyUI" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/react.svg" alt="React" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/python.svg" alt="Python" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/php.svg" alt="PHP" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/mysql.svg" alt="MySQL" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/git.svg" alt="Git" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/github.svg" alt="GitHub" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/laravel.svg" alt="Laravel" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/nodedotjs.svg" alt="Node.js" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/express.svg" alt="Express" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/typescript.svg" alt="TypeScript" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/wordpress.svg" alt="WordPress" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
        <img src="/icons/elementor.svg" alt="Elementor" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
      </div>
    </section>
  )
}
