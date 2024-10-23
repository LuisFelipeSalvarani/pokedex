import { createBrowserRouter } from 'react-router-dom'
import { App } from './app'
import { InfoPokemon } from './components/info-pokemon'
import { ListPokemons } from './components/list-pokemons'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ListPokemons />,
      },
      {
        path: '/:name',
        element: <InfoPokemon />,
      },
    ],
  },
])
