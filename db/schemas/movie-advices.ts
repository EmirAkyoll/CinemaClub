export const movie_advice_schema = {
    _id: {
        type: String,
        required: true, 
        unique: true,
    },

    title: {
        type: String,
        required: true,
    },

    genre: {
        type: String,
        required: true,
    },
    
    duration: {
        type: String,
        required: true,
    },

    release_year: {
        type: Number,
        required: true,
    },

    imdb_rating: {
        type: String,
        required: true,
    },

    likes: {
        type: Number,
        required: true,
    },

    dislikes: {
        type: Number,
        required: true,
    },

    director: {
        type: String,
        required: true,
    },

    banner_url_first: {
        type: String,
        required: true,
    },

    banner_url_second: {
        type: String,
        required: true,
    },

    summary: {
        type: String,
        required: true,
    },

    story_shortly: {
        type: String,
        required: true,
    },
}
