const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();

router.get('/contactus', contactsController.getContact);

router.post('/contactus', contactsController.postContact);

module.exports = router;