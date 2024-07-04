import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='border-t border-stone-100 dark:border-stone-900'>
      <div className='container p-4'>
        <div className='flex items-center justify-center gap-4 mb-4'>
          {links.map((link) => (
            <Link key={link.name} href={link.href} className='capitalize font-semibold'>
              {link.name}
            </Link>
          ))}
        </div>

        <div className='text-center text-sm'>&copy; {new Date().getFullYear()} Andini&apos;s DOGMASH</div>
      </div>
    </footer>
  )
}

const links = [
  {
    name: "about",
    href: "/about",
  },
 
]