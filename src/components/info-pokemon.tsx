import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getPokemon } from '../http/get-pokemon'
import { getTypeColor } from '../utils/get-type-color'
import { PokeballSvg } from './pokeball-svg'
import { Stats } from './stats'

export function InfoPokemon() {
  const { name } = useParams()

  if (!name) return null

  const { data: pokemon, isLoading } = useQuery({
    queryKey: ['get-pokemon', name],
    queryFn: () => getPokemon({ name }),
    staleTime: 1000 * 60,
    enabled: !!name,
  })

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <PokeballSvg className="size-20 animate-spin fill-zinc-400" />
      </div>
    )

  if (!pokemon) return <h1>Não foi possível acessar a Pokedex</h1>

  return (
    <div className="mx-auto w-11/12 py-10 lg:w-3/5">
      <div className="flex">
        <div className="flex-1">
          <h1 className="font-semibold text-3xl text-zinc-700 capitalize">
            {pokemon?.name}
          </h1>
          <img
            src={pokemon?.sprites.other.home.front_default}
            alt={pokemon.name}
          />
        </div>

        <ul className="flex-1">
          <li className="flex items-center gap-2 border-zinc-300 border-b px-4 py-2">
            <span className="w-24 text-right font-semibold text-zinc-700">
              National №:
            </span>
            <span className="font-bold text-zinc-700">
              {String(pokemon.order).padStart(4, '0')}
            </span>
          </li>

          <li className="flex items-center gap-2 border-zinc-300 border-b px-4 py-2">
            <span
              className="w-24 text-right font-semibold text-zinc-700"
              w-24
              text-right
            >
              Type:
            </span>
            <div className="flex items-center gap-2">
              {pokemon.types.map(type => {
                return (
                  <span
                    key={type.slot}
                    className={`rounded-md px-3 pt-1 pb-1.5 text-center font-semibold text-zinc-50 capitalize ring-2 ring-zinc-200 ${getTypeColor(type.type.name)}`}
                  >
                    {type.type.name}
                  </span>
                )
              })}
            </div>
          </li>

          <li className="flex items-center gap-2 border-zinc-300 border-b px-4 py-2">
            <span className="w-24 text-right font-semibold text-zinc-700">
              Height:
            </span>
            <span className="font-bold text-zinc-700">
              {pokemon.height / 10} m
            </span>
          </li>

          <li className="flex items-center gap-2 border-zinc-300 border-b px-4 py-2">
            <span className="w-24 text-right font-semibold text-zinc-700">
              Weight:
            </span>
            <span className="font-bold text-zinc-700">
              {(pokemon.weight / 10).toFixed(1)} Kg
            </span>
          </li>

          <li className="flex items-center gap-2 border-zinc-300 border-b px-4 py-2">
            <span className="w-24 text-right font-semibold text-zinc-700">
              Abilities:
            </span>
            <span className="flex flex-col">
              {pokemon.abilities.map(ability => {
                return (
                  <span
                    key={ability.ability.name}
                    className="font-bold text-zinc-700"
                  >
                    {ability.ability.name}
                    {ability.is_hidden && (
                      <span className="ml-1 font-normal text-xs tracking-wider">
                        (hidden)
                      </span>
                    )}
                  </span>
                )
              })}
            </span>
          </li>
        </ul>
      </div>

      <Stats pokemon={pokemon} />
    </div>
  )
}
