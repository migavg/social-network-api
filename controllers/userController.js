const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

const headCount = async () => {
    const numberOfUsers = await User.aggregate()
        .count('userCount');
    return numberOfUsers;
}

module.exports = {
    //gets all users
    async getAllUsers(req, res) {
        try {
            const user = await User.find();

            const userObj = {
                user,
                headCount: await headCount(),
            };

            res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //get single user
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .populate('thought')
                .populate('friends')
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }
            res.json(user);

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //create user

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //update user

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user exists with this ID' });
            }
            res.json({ message: 'User successfully updated' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    
}