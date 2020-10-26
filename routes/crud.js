const express = require('express');
const router = express.Router();


// @route     GET api/crud
// @desc      create all meeting rooms
// @access    Private
router.get("/", (req, res) => {

    res.send('Get all Meeting Room');
});

// @route     POST api/crud
// @desc      add all meeting rooms
// @access    Private
router.post("/", (req, res) => {

    res.send('Add new Meeting Room');
});

// @route     PUT api/crud
// @desc      update all meeting rooms
// @access    Private
router.put("/:id", (req, res) => {

    res.send('Update Meeting Room');
});

// @route     DELETE api/crud
// @desc      delete meeting rooms
// @access    Private
router.delete("/:id", (req, res) => {

    res.send('Delete Meeting Room');
});


module.exports = router;