const express = require('express');
const { dashboard } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/dashboard', protect, dashboard);

module.exports = router;