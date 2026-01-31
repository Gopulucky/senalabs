const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact
router.post('/contact', contactController.submitContact);

// GET /api/contact (optional admin route)
router.get('/contact', contactController.getContacts);

module.exports = router;
