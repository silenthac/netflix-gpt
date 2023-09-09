import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearchToggle:false,
        movienames:null,
        movieresults:null,
    },
    
    reducers:
    {
        toggleGptSearch:(state,action) =>
        {
            state.gptSearchToggle = !state.gptSearchToggle;
        },
        addGptMoviesResult:(state,action)=>{
            const {movienames,movieresults} = action.payload;
            state.movienames =movienames;
            state.movieresults=movieresults;

        }

    }
})

export const {toggleGptSearch,addGptMoviesResult}=gptSlice.actions;
export  default gptSlice.reducer;
