import React from 'react'
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) =>store.movies?.nowPlayingMovies);
    if(!movies)return;

    const mainMovie = movies[0];
   

    const {original_title,overview,id} = mainMovie;
    
  return (
    <>
    <Videotitle title = {original_title} overview ={overview}/>
    <VideoBackground movie_id = {id}/>
    </>
    
  )
}

export default MainContainer