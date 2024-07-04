import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='bg-blue-100 dark:bg-stone-950 border-b border-blue-200 dark:border-stone-900'>
      <div className='container p-4 flex justify-between items-center'>
        <h1 className='uppercase text-4xl font-extrabold text-blue-900 dark:text-blue-800 text-center'>
          <Link href={"/"}>
            Dogmash
          </Link>
        </h1>
        <ThemeToggle />
      </div>
    </nav>
  )
}
