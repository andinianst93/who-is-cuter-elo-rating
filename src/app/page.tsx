import React from 'react'
import Dogs from '@/components/Dogs'

export default function HomePage() {
  return (
    <section className='container p-4'>
      <h1 className='text-center text-3xl mt-4 font-semibold'>Who is cuter? Click to choose.</h1>
      <Dogs/>
    </section>
  )
}
