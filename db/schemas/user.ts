export const user_schema = {
    _id: {
        type: String,
        required: true,
    },

    user_name: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    e_mail: {
        type: String,
        required: true,
    },

    bookmarks: {
        type: [String],
        required: true,
    }
}
