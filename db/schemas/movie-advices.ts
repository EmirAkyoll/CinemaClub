export const movie_advice_schema = {
    _id: {
        type: String,
        required: true, 
    },

    title: {
        type: String,
        required: true,
    },

    genre: {
        type: [String],
        required: true,
    },
    
    duration: {
        type: String,
        required: true,
    },

    releaseYear: {
        type: Number,
        required: true,
    },

    imdbRating: {
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

    bannerUrlFirst: {
        type: String,
        required: true,
    },

    bannerUrlSecond: {
        type: String,
        required: true,
    },

    summary: {
        type: String,
        required: true,
    },

    storyShortly: {
        type: String,
        required: true,
    },
}