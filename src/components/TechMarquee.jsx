import React from 'react'

export default function TechMarquee() {
  return (
    <section className="w-full bg-base-200 py-4 overflow-hidden">
      <div className="animate-marquee flex gap-12">
        {/* Icônes des technologies */}
        <img src="/icons/html.svg" alt="HTML" className="w-12 h-12" />
        <img src="/icons/css.svg" alt="CSS" className="w-12 h-12" />
        <img src="/icons/js.svg" alt="JavaScript" className="w-12 h-12" />
        <img src="/icons/react.svg" alt="React" className="w-12 h-12" />
        <img src="/icons/node.svg" alt="Node.js" className="w-12 h-12" />
        <img src="/icons/git.svg" alt="Git" className="w-12 h-12" />
        {/* Tu peux en ajouter autant que tu veux */}
      </div>
    </section>
  )
}
