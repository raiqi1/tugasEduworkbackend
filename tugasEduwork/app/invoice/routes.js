const router = require('express').Router();
const { police_check } = require('../../middlewares');
const invoiceController = require('./controller');

router.get('/invoice/:order_id',police_check("read", "Invoice"),invoiceController.show);
// router.get('/invoice/:order_id',police_check("view", "Invoice"),invoiceController.show);

module.exports = router
