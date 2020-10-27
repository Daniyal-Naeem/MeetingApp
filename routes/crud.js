const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require("../middleware/auth");
const User = require('../models/User');
const Crud = require('../models/Crud');

// @route     GET api/crud
// @desc      create all meeting rooms
// @access    Private
router.get("/", auth , async (req, res) => {

    try {
        const crud = await Crud.find({user: req.user.id}).sort({
          date: -1,
        });
        res.json(crud);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

// @route     POST api/crud
// @desc      add all meeting rooms
// @access    Private
router.post(
    '/',
    [
      auth,
      [
        check('classname', 'ClassName is required')
          .not()
          .isEmpty(),
      ],
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
  
      const {classname, classid, type} = req.body;
  
      try {
        const newCrud = new Crud({
          classname,
          classid,
          type,
        
          user: req.user.id,
        });
  
        const crud = await newCrud.save();
  
        res.json(crud);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    },
  );

// @route     PUT api/crud/:id
// @desc      Update crud
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const  {classname, classid, type} = req.body;

  // Build crud object
  const crudFields = {};
  if (classname) crudFields.classname = classname;
  if (classid) crudFields.classid = classid;
  if (type) crudFields.type = type;

  try {
    let crud = await Crud.findById(req.params.id);

    if (!crud) return res.status(404).json({msg: 'crud not found'});

    // Make sure user owns crud
    if (crud.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    crud = await Crud.findByIdAndUpdate(
      req.params.id,
      {$set: crudFields},
      {new: true},
    );

    res.json(crud);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/crud/:id
// @desc      Delete crud
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let crud = await Crud.findById(req.params.id);

    if (!crud) return res.status(404).json({msg: 'crud not found'});

    // Make sure user owns crud
    if (crud.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await 
    Crud.findByIdAndRemove(req.params.id);

    res.json({msg: 'crud removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;