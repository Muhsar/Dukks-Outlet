import React from 'react'

export default function Header() {
  return (
    <>
      <header className="h-24 sm:h-32 flex items-center z-30 w-full bg-gray-800">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-50 dark:text-white rounded-lg bg-pink-500 hover:bg-pink-700 px-3 py-1 font-black text-3xl">
              DO
            </div>
            <div className="flex items-center">
              <nav className="font-sen text-gray-100 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <a href="#" className="py-2 px-6 flex">
                  Link
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Link
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Link
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Link
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Link
                </a>
              </nav>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-100 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-100 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-100 dark:bg-white mb-1"></span>
              </button>
            </div>
          </div>
        </header>
    </>
  )
}
