import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-black px-6 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center text-center">

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Jiu-Jitsu como estilo de vida.
        </h1>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contato"
            className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            Agendar aula grátis
          </a>

        </div>
      </section>
    </main>
  )
}

export default App