const express = require('express');
const { signup, login, resetPassword,requestPasswordReset, verify2FA, generateQRCode } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
router.post('/verify-2fa', verify2FA);
router.get('/generate-qrcode', generateQRCode);

module.exports = router;