"use server"

const renderError = (error: unknown) => {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : 'An error occurred',
    };
  }

const url = 'https://dog.ceo/api/breeds/image/random';

export const fetchDog = async () => {
  try {
    const response = await fetch(`${url}`)
    const data = await response.json();    
    return data.message;
  } catch (error) {
    return renderError(error);
  }
}