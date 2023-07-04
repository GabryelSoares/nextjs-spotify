import Link from 'next/link'
import * as Icon from 'lucide-react'
import Image from 'next/image'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <Icon.ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <Icon.ChevronRight />
            </button>
          </div>
          <h1 className="text-semibold mt-10 text-3xl">Good Afternoon</h1>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <Link
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/20 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong>Wasting Light</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-2 pl-1 text-black group-hover:visible">
                <Icon.Play fill="bg-black" />
              </button>
            </Link>
            <Link
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/20 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong>Wasting Light</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-2 pl-1 text-black group-hover:visible">
                <Icon.Play fill="bg-black" />
              </button>
            </Link>
            <Link
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/20 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong>Wasting Light</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-2 pl-1 text-black group-hover:visible">
                <Icon.Play fill="bg-black" />
              </button>
            </Link>
            <Link
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/20 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong>Wasting Light</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-2 pl-1 text-black group-hover:visible">
                <Icon.Play fill="bg-black" />
              </button>
            </Link>
            <Link
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/20 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong>Wasting Light</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-2 pl-1 text-black group-hover:visible">
                <Icon.Play fill="bg-black" />
              </button>
            </Link>
            <Link
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/20 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong>Wasting Light</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-2 pl-1 text-black group-hover:visible">
                <Icon.Play fill="bg-black" />
              </button>
            </Link>
          </div>

          <h2 className="text-semibold mt-10 text-2xl">
            Made for Gabryel Soares
          </h2>
          <div className="mt-4 grid grid-cols-8 gap-4">
            <Link
              href="/"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </Link>
            <Link
              href="/"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </Link>
            <Link
              href="/"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </Link>
            <Link
              href="/"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </Link>
            <Link
              href="/"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
