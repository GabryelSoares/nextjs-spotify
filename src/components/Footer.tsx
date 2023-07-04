import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-700 bg-zinc-800 px-6 py-6">
      <div className="flex items-center gap-3">
        <Image
          className="w-full"
          src="/album.jpg"
          width={56}
          height={56}
          alt="Capa do álbum Wasting Light da banda Foo Fighters"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400">Foo Fighters</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={24} className="text-zinc-200" />
          <SkipBack size={24} className="text-zinc-200" />
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
            <Play fill="bg-black" />
          </button>
          <SkipForward size={24} className="text-zinc-200" />
          <Repeat size={24} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200" />
          </div>
          <span className="text-xs text-zinc-400">2:31</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200" />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
