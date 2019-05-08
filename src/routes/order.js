var express = require('express')
var router = express.Router();

var orderController = require('../controllers/orderController');

// GET
router.get('/order',orderController.listOrder);
// POST
router.post('/order',orderController.newOrder);
// PUT
router.put('/order',orderController.updateOrder);
// DELETE
router.delete('/order',orderController.cancelOrder);

module.exports = router;