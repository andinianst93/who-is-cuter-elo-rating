"use client";

import React, { useState, useEffect } from 'react';
import { fetchDog } from '@/utils/action';
import Image from 'next/image';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import Spinner from './Spinner';

const INITIAL_RATING = 1200;
const K_FACTOR = 32;

export default function Dogs() {
  const { toast } = useToast();
  const [dog1, setDog1] = useState('');
  const [dog2, setDog2] = useState('');
  const [rating1, setRating1] = useState(INITIAL_RATING);
  const [rating2, setRating2] = useState(INITIAL_RATING);
  const [result, setResult] = useState('');
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const fetchNewDogs = async () => {
    setLoading1(true);
    setLoading2(true);

    const dogurl1 = await fetchDog();
    const dogurl2 = await fetchDog();
    setDog1(dogurl1);
    setDog2(dogurl2);
    setResult('');
    setLoading1(false);
    setLoading2(false);
  };

  useEffect(() => {
    fetchNewDogs();
  }, []);

  const handleVote = () => {
    const currentRating1 = rating1;
    const currentRating2 = rating2;

    // Calculate expected scores
    const expectedScore1 = 1 / (1 + 10 ** ((currentRating2 - currentRating1) / 400));
    const expectedScore2 = 1 / (1 + 10 ** ((currentRating1 - currentRating2) / 400));

    // Randomness based on expected scores
    const randomValue = Math.random();
    const winner = randomValue < expectedScore1 ? 'dog1' : 'dog2';

    // Update ratings
    const newRating1 = Math.round(currentRating1 + K_FACTOR * ((winner === 'dog1' ? 1 : 0) - expectedScore1));
    const newRating2 = Math.round(currentRating2 + K_FACTOR * ((winner === 'dog2' ? 1 : 0) - expectedScore2));

    setRating1(newRating1);
    setRating2(newRating2);

    // Determine and set the result message based on new ratings
    let message = '';
    if (winner === 'dog1') {
      message = 'Dog 1 is cuter!';
    } else {
      message = 'Dog 2 is cuter!';
    }
    setResult(message);
    toast({ description: message });

    // Fetch new dogs for the next match
    fetchNewDogs();
  };

  return (
    <>
      <div className='flex items-center justify-center gap-4 mt-12'>
        <div className='flex flex-col gap-4'>
          {loading1 ? (
            <Spinner />
          ) : (
            <Image
              src={dog1}
              alt="Dog 1"
              width={400}
              height={400}
              className='object-cover w-[400px] h-[400px]'
              onLoad={() => setLoading1(false)}
              onError={() => setLoading1(true)} // Handle image loading error
            />
          )}
          <Button onClick={() => handleVote()} variant='secondary'>Vote for Dog 1</Button>
        </div>
        <div className='flex flex-col gap-4'>
          {loading2 ? (
            <Spinner />
          ) : (
            <Image
              src={dog2}
              alt="Dog 2"
              width={400}
              height={400}
              className='object-cover w-[400px] h-[400px]'
              onLoad={() => setLoading2(false)}
              onError={() => setLoading2(true)} // Handle image loading error
            />
          )}
          <Button onClick={() => handleVote()} variant='secondary'>Vote for Dog 2</Button>
        </div>
      </div>
    </>
  );
}
