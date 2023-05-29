const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} =require("../../controllers/");


router.route('/').get(getAllThoughts);

router.route('/:thoughtId').get(getThoughtById);

router.route('/createThought').post(createThought);

router.route('/updateThought/:thoughtId').post(updateThought);

router.route('/deleteThought/:thoughtId').delete(deleteThought);

router.route('/:thoughId/reactions').post(addReaction);

router.route('/:thoughId/reactions/reactionId').delete(removeReaction);

module.exports = router;


