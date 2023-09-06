import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const choosen = useSelector(store =>store.config.lang)
  return (
    <div className=' pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input  className='p-4 m-4 col-span-9' type='text' placeholder={lang[choosen].gptSearchPlaceholder}/>
            <button className='col-span-3 py-2 m-4 bg-red-800 text-white rounded-lg'>{lang[choosen].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar