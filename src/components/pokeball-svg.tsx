import type { SVGProps } from 'react'

export function PokeballSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Pokeball</title>
      <path
        d="M21.901 13h-5.05a5.002 5.002 0 01-9.8 0H2c.502 5.053 4.765 9 9.95 9 5.186 0 9.45-3.947 9.951-9zM21.901 11c-.502-5.053-4.765-9-9.95-9C6.765 2 2.5 5.947 2 11h5.05a5.002 5.002 0 019.8 0h5.051z"
        fill=""
      />
      <path
        clipRule="evenodd"
        d="M11.95 15a3 3 0 100-6 3 3 0 000 6zm1.5-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill=""
        fillRule="evenodd"
      />
    </svg>
  )
}
