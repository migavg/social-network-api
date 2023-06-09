const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(

    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            //find date getter and set as default

        },
        username: {
            type: String,
            required: true
        },
        reactions: []

    }

);

const thought = model('though', thoughtSchema);

module.export = thought;