const express = require('express');
const router = express.Router();
const request = require('../controller/requestController')

router.post('/get-response',request);

module.exports = router