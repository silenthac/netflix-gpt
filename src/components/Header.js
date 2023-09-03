import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { Auth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';



const Header = () => {
 const navigate = useNavigate()
 const user = useSelector(store =>store.user)

  const handleSignout = () =>{

   
    

const auth = getAuth();
signOut(auth).then(() => {
   navigate("/")
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='absolute  w-full px-8 py-4 background bg-gradient-to-b from from-black z-30 flex justify-between'>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>

      { user && (<div className='flex p-2'>
        <img className='w-12 h-12'  
        src={user?.photoURL} alt='usericon'/>
        <button onClick={handleSignout}>(Sign out)</button>
      </div>)
}
    </div>

  )
}

export default Header