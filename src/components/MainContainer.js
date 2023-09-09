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
    <div className="pt-[30%] bg-black md:pt-0">
    <Videotitle title = {original_title} overview ={overview}/>
    <VideoBackground movie_id = {id}/>
    </div>
    
  )
}

export default MainContainer