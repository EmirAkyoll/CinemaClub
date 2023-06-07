import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",

    initialState: {
        allMovies: "babici",
        like: 0,
        dislike: 0,
        isModalOpen: false,
        whichMovies: 'all', // 'all' or 'bookmarks' 
        currentUser: null,
        clickedMovieId: ''
    },

    reducers: {
        addMovieAsOffer: (state, action) => {
            const findMovie = state.allMovies.find(
                (product) => product._id === action.payload._id
            );
            if (findMovie) {
                findMovie.quantity += 1
            } else {
                state.allMovies.push(action.payload)
            }
        },

        addMovie: (state, action) => {
            const findMovie = state.allMovies.find(
                (product) => product._id === action.payload._id
            );
            if (findMovie) {
                findMovie.quantity += 1
            } else {
                state.allMovies.push(action.payload)
            }
        },

        deleteMovie: (state, action) => {
            state.allMovies = state.allMovies.filter(
                (product) => product._id !== action.payload._id
            );
        },
        
        likeIt: (state, action) => {
            const movie = state.allMovies.find(
                (item) => item._id === action.payload._id
                );
            state.like += 1;
        },

        dislikeIt: (state, action) => {
            const movie = state.allMovies.find(
                (item) => item._id === action.payload._id
            );
            state.dislike -= 1;
        },

        getMovieId: (state, action) => {
            state.clickedMovieId = action.payload;
        },

        openModal: (state) => {
            state.isModalOpen = true;
        },

        closeModal: (state) => {
            state.isModalOpen = false;
        },

        saveCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },

        logIn: (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem("CurrentUser", JSON.stringify(action.payload));
            console.log(`IN REDUX state: ${state.currentUser.password}, action: ${action.payload.password}`);
        },

        setWhichMovies: (state, action) => {
            state.whichMovies = action.payload;
        },
    },
});

export const { addMovie, deleteMovie, likeIt, dislikeIt, openModal, 
               closeModal, logIn, saveCurrentUser, setWhichMovies, getMovieId } = movieSlice.actions;

export default movieSlice.reducer;
