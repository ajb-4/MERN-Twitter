const express = require('express');
const router = express.Router();

/* GET users listing. */
rrouter.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/users"
  });
});

module.exports = router;
