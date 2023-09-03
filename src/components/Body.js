import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser'
import { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Navigate } from 'react-router-dom';


const Body = () => {
    const dispatch = useDispatch();
    


    useEffect(()=>{


  


        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            
            // ...
          } else {
            dispatch(removeUser())
            // User is signed out
            // ...
          }
        });
        
        
        },[])
    const appRouter = createBrowserRouter([
        {
            path :"/",
            element : <Login/>
        },
        {
            path :"/browse",
            element : <Browser/>
        }




    ])

    
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body