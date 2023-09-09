import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const {movieresults,movienames}=useSelector(store=>store.gpt)
  if(!movienames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-70'>
      <div>
        {
          movienames.map((moviename,index)=>(
            <MovieList key={moviename} title = {moviename} movies={movieresults[index]}/>
          ))
        }
      </div>


    </div>
  )
}

export default GptMovieSuggestion