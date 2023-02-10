const { police_check } = require('../../middlewares');
const tagController= require('./controller');

const router = require('express').Router();

router.post('/tag',police_check('create','Tag'),tagController.store)
router.get('/tag',tagController.index)
router.get('/tag/:id',tagController.details)
router.put('/tag/:id',police_check('update','Tag'),tagController.update)
router.delete('/tag/:id',police_check('delete','Tag'),tagController.destroy)

module.exports = router