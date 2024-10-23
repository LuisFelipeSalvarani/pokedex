export interface RequestAllPokemons {
  count: number
  next: string | null
  previous: string | null
  results: Pokemons[]
}

export interface Pokemons {
  name: string
  url: string
}
