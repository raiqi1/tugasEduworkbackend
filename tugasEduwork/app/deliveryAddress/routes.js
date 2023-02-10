const router = require('express').Router();
const { police_check } = require('../../middlewares');
const deliveryController = require('./controller');


router.post('/delivery-addresses',police_check('create','DeliveryAddress'),deliveryController.store)
router.get('/delivery-addresses',police_check('view','DeliveryAddress'),deliveryController.index)
router.put('/delivery-addresses/:id',deliveryController.update)
router.delete('/delivery-addresses/:id',deliveryController.destroy)

module.exports = router