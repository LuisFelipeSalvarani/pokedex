import type { RequestPokemon } from '../interfaces/get-pokemon'

const baseURL = import.meta.env.VITE_BASE_URL

interface GetPokemonRequest {
  name: string
}

export const getPokemon = async ({
  name,
}: GetPokemonRequest): Promise<RequestPokemon> => {
  const pokemon = await fetch(`${baseURL}/pokemon/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await pokemon.json()

  return data
}
