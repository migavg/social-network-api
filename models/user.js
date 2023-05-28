const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            max_lenght: 50,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            match: /.+\@.+\..+/,
        },
        thoughts: [],

        friends: [],
    }
);

const user = model('user', userSchema);

module.exports = user;