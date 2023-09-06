import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import lang from '../utils/languageConstant'

const GptSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
      </div>
    <div className='pt-20'>
    <GptSearchBar/>
    <GptMovieSuggestion/>
    </div>
    </div>

    
  )
}

export default GptSearch