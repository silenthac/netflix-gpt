import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { addPopularMovies } from "../utils/moviesSlice";




const useGetPopularMovies =() =>{
    const dispatch = useDispatch();

  const getPopular =  async() =>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS);
    const json = await data.json()
    console.log(json.results)
   dispatch(addPopularMovies(json.results))
   




  }

 useEffect(() =>{
  getPopular();

 },[])
}

export default  useGetPopularMovies;