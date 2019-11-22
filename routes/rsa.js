const express = require('express');
const router = express.Router();

const rsaController = require('../controllers/rsa.controller');

router.post('/encrypt', rsaController.encrypt);
router.post('/decrypt', rsaController.decrypt);

module.exports = router;