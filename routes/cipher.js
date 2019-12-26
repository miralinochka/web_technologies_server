const express = require('express');
const router = express.Router();

const cipherController = require('../controllers/cipher.controller');

router.post('/encrypt', cipherController.encrypt);
router.get('/decrypt', cipherController.decrypt);

module.exports = router;