import type { RequestAllPokemons } from '../interfaces/get-all-pokemons-interface'

const baseURL = import.meta.env.VITE_BASE_URL

interface GetAllPokemonsRequest {
  offset: number
  limit: number
}

export const getAllPokemons = async ({
  offset,
  limit,
}: GetAllPokemonsRequest): Promise<RequestAllPokemons> => {
  const pokemons = await fetch(
    `${baseURL}/pokemon/?offset=${offset}&limit=${limit}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await pokemons.json()

  return data
}
