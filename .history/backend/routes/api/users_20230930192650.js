const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/users"
  });
});

exports.loginUser = async function(user) {
  const userInfo = {
    _id: user._id,
    username: user.username,
    email: user.email
  };
  const token = await jwt.sign(
    userInfo, // payload
    secretOrKey, // sign with secret key
    { expiresIn: 3600 } // tell the key to expire in one hour
  );
  return {
    user: userInfo,
    token
  };
};

module.exports = router;
