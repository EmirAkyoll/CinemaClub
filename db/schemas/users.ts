export const user_schema = {
    id: {
        type: String,
        required: true, 
    },
    
    userName: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    
    eMail: {
        type: String,
        required: true,
    },
}