import type { RequestPokemon } from '../interfaces/get-pokemon'

export function Stats({ pokemon }: { pokemon: RequestPokemon }) {
  return (
    <div>
      <h2 className="font-bold text-xl text-zinc-700">Base stats</h2>
      {pokemon.stats.map((stat, i) => {
        const width = 320
        const percent = (stat.base_stat * 100) / width / 50
        const colors = [
          'bg-green-500',
          'bg-red-500',
          'bg-orange-500',
          'bg-purple-500',
          'bg-yellow-500',
          'bg-blue-500',
        ]
        const statsName = [
          'HP',
          'Attack',
          'Defense',
          'Sp. Atk',
          'Sp. Def',
          'Speed',
        ]
        let statsMin: number
        let statsMax: number

        if (stat.stat.name === 'hp') {
          statsMin = ((2 * stat.base_stat) / 100) * 100 + 10 + 100
          statsMax =
            ((2 * stat.base_stat + 31 + 252 / 4 + 100) / 100) * 100 + 10
        } else {
          statsMin = (((2 * stat.base_stat) / 100) * 100 + 5) * 0.9
          statsMax =
            (((2 * stat.base_stat + 31 + 252 / 4) / 100) * 100 + 5) * 1.1
        }

        return (
          <div key={stat.stat.name} className="mt-3 flex items-center gap-4">
            <h3
              key={stat.stat.name}
              className="w-16 font-semibold text-sm text-zinc-600"
            >
              {statsName[i]}
            </h3>
            <span className="w-7 font-semibold text-sm text-zinc-600">
              {stat.base_stat}
            </span>
            <div className="h-2 w-96 rounded-full bg-zinc-200 ">
              <div
                className={`h-2 rounded-full ${colors[i]}`}
                style={{ width: width * percent }}
              />
            </div>
            <span className="w-7 font-semibold text-sm text-zinc-600">
              {Math.floor(statsMin)}
            </span>
            <span className="w-7 font-semibold text-sm text-zinc-600">
              {Math.floor(statsMax)}
            </span>
          </div>
        )
      })}
      <div className="mt-3 flex items-center gap-4">
        <h3 className="w-16 font-semibold text-sm text-zinc-600">Total</h3>

        <span className="w-7 font-semibold text-sm text-zinc-600">
          {pokemon.stats.reduce(
            (accumulator, value) => accumulator + value.base_stat,
            0
          )}
        </span>

        <div className="h-2 w-96" />

        <span className="w-7 font-semibold text-sm text-zinc-600">Min</span>
        <span className="w-7 font-semibold text-sm text-zinc-600">Max</span>
      </div>
    </div>
  )
}
