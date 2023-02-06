import { ADD_MOVIE } from "../actionTypes/movieActionTypes"

export const addNewMovie = (movie_data) => {
    console.log("ACTION ÇALIŞTI");
    return {
        type: ADD_MOVIE,
        payload: movie_data
    }
}
