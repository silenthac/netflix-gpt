import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
 
import { useNavigate } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/const';



const Header = () => {
 const navigate = useNavigate()
 const user = useSelector(store =>store.user)

 const dispatch = useDispatch();


 useEffect(()=>{


  


  const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))

      navigate('/browse');
      
      // ...
    } else {
      dispatch(removeUser())
      // User is signed out
      // ...
      navigate('/');
    }
  });
  
  return  ()=> unsubscribe()
  },[])

  const handleSignout = () =>{

   
    

const auth = getAuth();
signOut(auth).then(() => {
  
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='absolute  w-full px-8 py-4 background bg-gradient-to-b from from-black z-30 flex justify-between'>
        <img className='w-44' src={LOGO}></img>

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