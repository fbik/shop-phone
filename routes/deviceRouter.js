const  Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.detAll)
router.get('/id', deviceController.getOne)
router.delete('/id', deviceController.getOne)

module.exports = router
