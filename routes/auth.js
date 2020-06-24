const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc Get logged in user
// @access Private
router.get('/', (req, res) => {
  res.send('Get Logged in Users');
});

// @route POST api/auth
// @desc Auth User & get Token
// @access Private
router.post('/', (req, res) => {
  res.send('Log In Users');
});
module.exports = router;
