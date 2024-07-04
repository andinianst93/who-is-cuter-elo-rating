import React from 'react'

export default function AboutPage() {
  return (
    <section className='container my-16'>
      <h1 className='text-center text-3xl mt-4 font-semibold'>About</h1>
      <p className='text-center mt-4'>This is a simple app to vote on which dog is cuter.</p>
      <p className='text-center'>The app uses the Elo rating system to calculate the winner.</p>
    </section>
  )
}
