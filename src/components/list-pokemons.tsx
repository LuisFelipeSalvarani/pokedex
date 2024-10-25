import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getAllPokemons } from '../http/get-all-pokemons'
import { Pagination } from './pagination'
import { PokeballSvg } from './pokeball-svg'

export function ListPokemons() {
  const [searchParam] = useSearchParams()

  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [limit] = useState(20)

  useEffect(() => {
    const pageFromParams = searchParam.get('page')
    setPage(pageFromParams ? Number(pageFromParams) : 1)
  }, [searchParam])

  useEffect(() => {
    if (page && page !== 0) {
      setOffset((Number(page) - 1) * limit)
    } else {
      setOffset(0)
    }
  }, [limit, page])

  const { data: pokemons, isLoading } = useQuery({
    queryKey: ['get-all-pokemons', offset, limit],
    queryFn: () => getAllPokemons({ offset, limit }),
    staleTime: 1000 * 60,
  })

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <PokeballSvg className="size-20 animate-spin fill-zinc-400" />
      </div>
    )

  if (!pokemons || pokemons?.results.length === 0)
    return <h1>Não foi possível acessar a Pokedex</h1>

  const totalPage = Math.floor(pokemons.count / 20)

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {pokemons &&
          pokemons.results.length > 0 &&
          pokemons.results.map((pokemon, i) => {
            // if (i + 1 + offset <= 1025) {
            return (
              <Link key={pokemon.name} to={`/${pokemon.name}`}>
                <div className="relative flex-1 cursor-pointer rounded-xl bg-zinc-200 p-4 shadow-md shadow-zinc-300 transition-all hover:scale-105">
                  <div className="size-full bg-center bg-cover bg-pokeball">
                    <h2 className="border-red-600 border-l-4 pl-2 font-semibold text-xl text-zinc-700 capitalize">
                      {pokemon.name.replace(/-/g, ' ')}
                    </h2>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1 + offset <= 1025 ? i + 1 + offset : i + 1 + offset + 8975}.png`}
                      alt={pokemon.name}
                    />
                  </div>
                </div>
              </Link>
            )
            // }
          })}
      </div>

      {pokemons.results.length > 1 && (
        <div className="flex flex-1 items-center justify-center">
          <Pagination page={page} totalPage={totalPage} />
        </div>
      )}
    </>
  )
}
