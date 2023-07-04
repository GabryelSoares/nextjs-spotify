import { Home, Library, Search } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="bg-red h-3 w-3 rounded-full bg-red-500" />
        <div className="bg-red h-3 w-3 rounded-full bg-yellow-500" />
        <div className="bg-red h-3 w-3 rounded-full bg-green-500" />
      </div>
      <nav className="mt-10 space-y-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Home />
          Home
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </Link>
      </nav>
      <nav className="mt-6 flex flex-col gap-2 border-t border-zinc-800 pt-10">
        <Link href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </Link>
        <Link href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Aniver Funk
        </Link>
        <Link href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My Playlist
        </Link>
        <Link href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </Link>
      </nav>
    </aside>
  )
}
