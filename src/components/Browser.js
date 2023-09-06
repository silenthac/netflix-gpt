import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/const'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useGetPopularMovies from '../hooks/useGetPopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingVideos from '../hooks/useUpcomingVideos'
import GptSearch from './GptSearch'

const Browser = () => {

  const ShowGptSearch = useSelector(store =>store.gpt.gptSearchToggle)

  useNowPlayingMovies();
  useGetPopularMovies();
  useTopRatedMovies();
  useUpcomingVideos();

  return (
    <div>
      <Header/>
      {
        ShowGptSearch ? <GptSearch/> : <><MainContainer/>
        <SecondaryContainer/></>
      }
      
      
      
     
      </div>
  )
}

export default Browser