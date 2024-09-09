const express = require('express');
const router = express.Router();
const newsControllers = require('../app/controllers/newsControllers');
router.use('/:plug', newsControllers.show);
router.use('/', newsControllers.index );


module.exports = router;