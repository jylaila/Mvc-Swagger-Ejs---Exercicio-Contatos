const express = require('express')
const router = express.Router()

const contactController = require('../controllers/contactController')

router.get('/', contactController.get)
router.post('/', contactController.save)
router.delete('/delete', contactController.delete)
router.get('/qty', contactController.getQty)
router.get('/all', contactController.getAll)

module.exports = router
