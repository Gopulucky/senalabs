const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// POST /api/join
router.post('/join', subscriptionController.subscribe);

module.exports = router;
