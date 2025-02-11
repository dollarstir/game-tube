import React from 'react'
import useGnre from '../hooks/useGenre'

export default function GenreList() {
    const {genre,setGenre,isLoading,error,setError} = useGnre();
    console.log(genre)
  return (
    <ul>
        {genre.map((genre,index)=><li key={index}>{genre}</li>)}
    </ul>
  )
}
