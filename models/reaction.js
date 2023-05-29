const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            //use mongoose object id data and set to default
        },

        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },

        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            //insert date getter and set to default
        },
    }
    );

    const reaction = model('reaction', reactionSchema);

    module.exports = reaction;