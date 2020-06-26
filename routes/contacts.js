const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');
// @route   GET api/Contacts
// @desc    Get all Users Contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   POST api/Contacts
// @desc    Add New Contact
// @access  Private
router.post(
  '/',
  [auth, [check('name', 'Name is Required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/Contacts/:id
// @desc   Update Contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// @route   Delete api/Contacts/:id
// @desc   Update Contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete  Contact');
});
module.exports = router;
