const Router = require('express')
const router = new Router()
const  userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.registration)
router.get('/auth', authMiddleware, userController.registration)
router.delete('/id', userController.registration)

module.exports = router
