import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import GptError from './GptError'
import { API_OPTIONS } from '../utils/const'
import { addGptMoviesResult } from '../utils/gptSlice'







const GptSearchBar = () => {

  const dispatch = useDispatch();

    const choosen = useSelector(store =>store.config.lang)

    const  searchText = useRef(null)

    const searchMovieTMDB = async (movie)=>{

      const data =  await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
      const json =  await data.json();
      return json.results;
      //this will return a promise 

    }


const handleGptSearchClick = async () =>{
  console.log(searchText.current.value)

  const GPTquery  = "Act as a Movie Recomendation System  and suggest some movies for the query : "+
  searchText.current.value +". only give me names of 5  movies ,comma separated like the example result  given ahead .Example Gadar,hera pheri, tu jhooti mae makkar,i love my india, shershaah "

  const GPTresult = await openai.chat.completions.create({
    messages: [{ role: 'user', content: GPTquery }],
    model: 'gpt-3.5-turbo',
  });

 

  console.log(GPTresult.choices?.[0]?.message?.content);

  const gptMovies = GPTresult.choices?.[0]?.message?.content.split(",");

  const primoseArray = gptMovies.map(movie =>searchMovieTMDB(movie));
  //now here we  will get array of 5 promises

  const tmdbResult =  await Promise.all(primoseArray)
  console.log(tmdbResult)

  dispatch(addGptMoviesResult({movienames:gptMovies,movieresults:tmdbResult}))


}

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input  ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={lang[choosen].gptSearchPlaceholder}/>
            <button  onClick={handleGptSearchClick} className='col-span-3 py-2 m-4 bg-red-800 text-white rounded-lg'>{lang[choosen].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar