const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,

} = require("../../controllers/");

router.route('/').get(getAllUsers);

router.route('/:userId').get(getUserById);

router.route(`/createUser`).post(createUser);

router.route('/updateUser/:userId').post(updateUser); 

router.route('/deleteUser/:userId').delete(deleteUser);

router.route(`/:userId/addFriend/:friendId`).post(addFriend); 

router.route(`/:userId/removeFriend/:friendId`).delete(removeFriend);

module.exports = router;



