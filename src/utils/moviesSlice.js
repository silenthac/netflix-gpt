import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name :"movies",
    initialState :
    {
        nowPlayingMovies : null,
        trailerVideo:null,
        popularMovies:null,
        toprated:null,
        upcoming:null
    },

    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRated :(state,action)=>{
            state.toprated = action.payload;
        },
        addUpcoming :(state,action)=>{
            state.upcoming = action.payload;
        },
        addTrailerVideo :(state,action)=>{
            state.trailerVideo=action.payload

        }


    }

})


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcoming} = moviesSlice.actions

export default moviesSlice.reducer;