"use client";
import React from 'react'
import { Button } from '@/components/ui/button';

export default function error({error, reset} : {  error: Error & { digest?: string };
  reset: () => void;}) {
  return (
    <>
    <div className="flex flex-col space-y-3 my-16 items-center">
        <h1 className="text-2xl font-semibold text-center">There was an error</h1>
        <p className="text-center">{error.message}</p>
        <Button variant='outline' className='w-fit' onClick={
          () => reset()
        }>Try again</Button>
    </div>
    </>
  )
}