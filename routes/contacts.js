const express = require('express');
const router = express.Router();

// @route   GET api/Contacts
// @desc    Get all Users Contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Resgister A user');
});

// @route   POST api/Contacts
// @desc    Add New Contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add Contact');
});

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
