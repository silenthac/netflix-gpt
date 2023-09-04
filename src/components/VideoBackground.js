import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/const'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'


const VideoBackground = ({movie_id}) => {

    // const [trailerId,settrailerId] = useState(null)
    const trailerVideo  =useSelector(store =>store.movies?.trailerVideo);
    // usemoviestrailer(movie_id);
    
        const dispatch = useDispatch();
        const getMovieVideo=async ()=>{
           
            const data =  await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US", API_OPTIONS)
             const json =  await data.json();
             
             const filterData = json.results.filter((video)=>video.type=="Trailer")
             
             const trailer = filterData.length?filterData[0]:json.results[0]
            //  settrailerId(trailer)
             dispatch(addTrailerVideo(trailer))
             
    
        }
    
        useEffect(()=>{
            getMovieVideo()
    
        },[])
    
    
    
  return (
    <div className='w-screen'>
    <iframe 
    className='w-screen aspect-video'
    
    src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&autoplay=1&mute=1"}
     title="YouTube video player"
      frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>

        </iframe>
    </div>
    
  )
}

export default VideoBackground