const express = require('express');
const router = express.Router();

// @route  GET api/cards
// @desc   Get logged in user cards
// @access   Private
router.get('/', (req, res) => {
    res.send('Get all cards')
});

// @route  POST api/cards
// @desc   Add new card
// @access Private
router.post('/', (req, res) => {
    res.send('Add all cards')
});

// @route  PUT api/cards/:id
// @desc   Update cards
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update cards')
});

// @route  DELETE api/cards/:id
// @desc   Delete cards
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete cards')
});



module.exports = router;