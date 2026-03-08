import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl font-bold">Bienvenue sur mon portfolio</h1>
        <p className="mt-4">Ce site est construit avec Vite, TailwindCSS et DaisyUI.</p>
      </div>
    </>
  )
}

export default App
