import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video text-white pt-[20%] px-20 absolute bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='w-1/4 py-6 text-lg'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-16 text-xl  rounded lg hover:bg-opacity-80'>▶️Play</button>
            <button className='bg-gray-500 text-white p-4 mx-4 px-16 text-xl bg-opacity-50 rounded lg'>More info</button>
        </div>



    </div>
  )
}

export default Videotitle