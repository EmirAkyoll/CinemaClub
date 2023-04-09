export const movie_advice_schema = {
    id: {
        type: String,
        required: true, 
    },

    movieName: {
        type: String,
        required: true,
    },

    genre: {
        type: String,
        required: true,
    },
    
    time: {
        type: Number,
        required: true,
    },

    publishYear: {
        type: Number,
        required: true,
    },

    imdbScore: {
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