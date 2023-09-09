import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
 
import { useNavigate } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/const';
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/const';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {
  const ShowGptSearch = useSelector(store =>store.gpt.gptSearchToggle)


  

  

 
 const navigate = useNavigate()
 const user = useSelector(store =>store.user)

 const dispatch = useDispatch();

 const handleShowGpt = () =>{

  dispatch(toggleGptSearch())
  
}

const handleChangeLanguage = (e) =>{
  dispatch(changeLanguage(e.target.value))

}


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
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' src={LOGO}></img>

      { user && (<div className='flex p-2 justify-between'>
        { ShowGptSearch&& <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleChangeLanguage}>
        {
          SUPPORTED_LANG.map(lang =><option value={lang.identifier}>{lang.name}</option>)
        }
        </select>
      }
        <button className='px-4  mx-4 bg-purple-700 rounded-lg' onClick={handleShowGpt}  >{ShowGptSearch? "Show Movies":"Gpt Search"}</button>
        <img className='hidden md:block w-12 h-12'  
        src={user?.photoURL} alt='usericon'/>
        <button className='text-white' onClick={handleSignout}>(Sign out)</button>
      </div>)
}
    </div>

  )
}

export default Header