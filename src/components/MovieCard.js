import React from 'react'

const MovieCard = ({posterpath}) => {
  if(!posterpath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img  src={"https://image.tmdb.org/t/p/w500/" + posterpath}/>
    </div>
  )
}

export default MovieCard