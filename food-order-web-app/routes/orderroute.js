var express = require('express');
var router = express.Router();
var base = process.env.PWD;
var orderroute = require(base + '/controllers/order/orderapi');

router.get('/order', orderroute.getOrder);
router.post('/order/create', orderroute.createOrder);
router.put('/order/:id', orderroute.updateOrder);
router.delete('/order/:id', orderroute.deleteOrder);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
