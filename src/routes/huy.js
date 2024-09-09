const express = require('express');
const router = express.Router();
const huyControllers = require('../app/controllers/HuyControllers');

router.use('/:plug',huyControllers.show);
router.use('/', huyControllers.index);

module.exports = router;
