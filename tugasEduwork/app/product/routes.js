const router = require('express').Router()
const multer = require('multer');
const os = require('os');
const { police_check } = require('../../middlewares');
const  productController  = require('./controller'); 

router.post('/product',multer({dest:os.tmpdir()}).single('image')
,police_check('create','Product')
,productController.store); 

router.put('/product/:id',multer({dest:os.tmpdir()}).single('image')
,police_check('update','Product'),productController.update);

router.delete('/product/:id',multer({dest:os.tmpdir()}).single('image')
,police_check('delete','Product'),productController.destroy);

router.get('/product',productController.index);

module.exports = router