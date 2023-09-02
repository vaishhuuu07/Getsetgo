var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// api.js

const axios = require('axios');

// Now you can use Axios to make HTTP requests


module.exports = router;
