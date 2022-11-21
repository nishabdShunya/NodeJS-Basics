const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();

router.get('/success', contactsController.getSuccessContact);

module.exports = router;