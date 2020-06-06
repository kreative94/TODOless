const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item Model
const Item = require('../../models/item');

// @route GET api/items
// @desc Get all items
// @access 
router.get('/', async(req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route POST api/items
// @desc post a new item
// @access
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        date: req.body.date
    });

    newItem.save().then(item => res.json(item));

});

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;