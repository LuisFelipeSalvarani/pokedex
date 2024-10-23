import { Outlet } from 'react-router-dom'
import { PokemonLogoSvg } from './components/pokemon-log-svg'

export function App() {
  return (
    <>
      <header className="flex items-center justify-center bg-red-600 p-6 shadow-md shadow-zinc-300">
        <PokemonLogoSvg className="max-h-32" />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="flex items-center justify-center p-4 text-sm">
        &copy; Copyright 2024. Made by Luis Felipe Salvarani
      </footer>
    </>
  )
}
