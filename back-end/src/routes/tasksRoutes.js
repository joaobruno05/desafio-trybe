const express = require('express');

const router = express.Router();

// rotas
router.get('/', (req, res) => res.json('hello world'));

module.exports = router;
