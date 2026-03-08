import React from 'react'

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/projet1.png" alt="Projet 1" /></figure>
        <div className="card-body">
          <h2 className="card-title">Projet 1</h2>
          <p>Description rapide du projet.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Voir plus</button>
          </div>
        </div>
      </div>
      {/* Tu peux dupliquer cette card pour plusieurs projets */}
    </div>
  )
}
