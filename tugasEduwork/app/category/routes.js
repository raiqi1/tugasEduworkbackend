const router = require('express').Router()
const { police_check } = require('../../middlewares')
const categoryController = require('./controller')

router.post('/category',police_check('create','Category'),categoryController.store)
router.put('/category/:id',police_check('update','Category'),categoryController.update)
router.get('/category',categoryController.index)
router.delete('/category/:id',police_check('delete','Category'),categoryController.destroy)

module.exports = router