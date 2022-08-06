import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="relative bg-black px-6 sm:px-12 py-4">
      <div className="flex items-center 3xl:hidden">
        <div className="flex-shrink-0">
          <Link href="/">
            <a className="flex items-center">
              {/* <img className="h-8 w-8" src="/logo.svg" alt="logo" /> */}
              <span className="ml-2 text-xl font-semibold text-white">
                Next.js
              </span>
            </a>
          </Link>

          <div className="hidden md:block">
            <div className="ml-4">
              <Link href="/about">
                <a className="text-sm font-semibold text-white">About</a>
              </Link>
            </div>
          </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar