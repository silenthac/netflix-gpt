import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { addTopRated } from "../utils/moviesSlice";




const useTopRatedMovies =() =>{
    const dispatch = useDispatch();

  const TopRated =  async() =>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
    const json = await data.json()
    console.log(json.results)
   dispatch(addTopRated(json.results))
   




  }

 useEffect(() =>{
  TopRated();

 },[])
}

export default  useTopRatedMovies;