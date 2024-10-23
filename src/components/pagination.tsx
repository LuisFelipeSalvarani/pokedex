import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface PaginationProps {
  page: number
  totalPage: number
}

export function Pagination({ page, totalPage }: PaginationProps) {
  const location = useLocation()

  console.log(page <= 1)

  return (
    <div className="flex space-x-3">
      <button
        type="button"
        className="rounded-full bg-red-600 p-2 text-zinc-50 ring ring-zinc-300 transition-all duration-300 hover:ring-zinc-400 disabled:cursor-not-allowed disabled:select-none disabled:opacity-40"
        disabled={page <= 1}
      >
        <Link
          to={location.pathname}
          className="flex size-full items-center justify-center"
        >
          <ChevronsLeft className="size-5" />
          <span className="sr-only">Primeira página</span>
        </Link>
      </button>

      <button
        type="button"
        className="rounded-full bg-red-600 p-2 text-zinc-50 ring ring-zinc-300 transition-all duration-300 hover:ring-zinc-400"
        disabled={page <= 1}
      >
        <Link
          to={`${location.pathname}?page=${page - 1}`}
          className="flex size-full items-center justify-center"
        >
          <ChevronLeft className="size-5" />
          <span className="sr-only">Página anterior</span>
        </Link>
      </button>

      <button
        type="button"
        className="rounded-full bg-red-600 p-2 text-zinc-50 ring ring-zinc-300 transition-all duration-300 hover:ring-zinc-400"
        disabled={page + 1 > totalPage}
      >
        <Link
          to={`${location.pathname}?page=${page + 1}`}
          className="flex size-full items-center justify-center"
        >
          <ChevronRight className="size-5" />
        </Link>
      </button>

      <button
        type="button"
        className="rounded-full bg-red-600 p-2 text-zinc-50 ring ring-zinc-300 transition-all duration-300 hover:ring-zinc-400"
        disabled={page + 1 > totalPage}
      >
        <Link
          to={`${location.pathname}?page=${totalPage}`}
          className="flex size-full items-center justify-center"
        >
          <ChevronsRight className="size-5" />
        </Link>
      </button>
    </div>
  )
}
