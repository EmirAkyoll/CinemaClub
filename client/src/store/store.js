import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import movieSlice from './movieSlice';

export default configureStore({
    reducer:{
        movies: movieSlice,
        // enhancers: [composeWithDevTools()]
    }
})
