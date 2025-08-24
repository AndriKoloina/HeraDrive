const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/register', authMiddleware(['administrateur']) , userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

module.exports = router