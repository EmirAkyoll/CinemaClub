import { ADD_MOVIE } from "../actionTypes/movieActionTypes";
import { initialMovieState } from "../states/movieState";

function movieReducer(state = initialMovieState, action) {
    switch (action.type) {
        case ADD_MOVIE:
            return { movies: action.payload };

        default: 
            return state;
    }    
}

export default movieReducer;