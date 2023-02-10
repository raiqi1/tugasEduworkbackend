const { police_check } = require('../../middlewares');
const orderController = require('./controller');

const router = require('express').Router();

router.post('/orders',police_check('create','Order'),orderController.store);
router.get('/orders',police_check('view','Order'),orderController.index);

module.exports = router;