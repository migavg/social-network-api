const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');


module.exports = {
    // Get all thoughts
    async getAllThoughts(req, res) {
       try {
         const thought = await Thought.find();
         res.json(thought);
       } catch (err) {
         res.status(500).json(err);
       }
     },

     //get single thought
     async getThoughtById(req, res) {
        try {
          const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      //create thought
      async createThought (req, res) {
        try {
          const thought = await Thought.create(req.body)
          .then (({ _id }) => {
            return User.findOneAndUpdate(
              { username: req.body.username },
              { $push: {thought: _id } },
              { new: true }
            );
          })
          if (!thought) {
            return res.status(404).json({ mesage: 'No thought with that ID' });
          }
          res.json(thought);
        } catch (err) {
          res.status(500).json(err)
        }
      },

      //delete thought
      async deleteThought(req, res) {
        try {
          const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
    
          if (!thought) {
            res.status(404).json({ message: 'No thought with that ID' });
          }

        }
    
    }
    }