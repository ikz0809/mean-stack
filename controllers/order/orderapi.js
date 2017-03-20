var base = process.env.PWD;
console.log("----base path :"+base);
var Order = require(base + '/models/order');


// insert the data
var createOrder = function(req, res) {
  var order = new Order(req.body);
  console.log("-----request object name---"+req.bodyParser);
  console.log("-----name ---"+order.name);
  order.save(function (err, record) {
    if(err) {res.send(500, err);}
    res.json(200, record);
  });
};

// fetch the data
var getOrder = function(req, res) {
  Order.find(function(err, records){
    if(err) {res.send(500, err);}
    res.json(200, records);
  });
};

// update the data
var updateOrder = function(req, res) {
  Order.findById(req.params.id, function(err, order) {
    if(err) { res.send(500, err); }

    if(req.body.name) { order.name = req.body.name ; }
    if(req.body.name) { order.quantity = req.body.quantity ; }

    order.save(function(err, order){
      if(err) {res.send(500, err); }
      res.json(200, order);
    });
  });
};

// delete the data
var deleteOrder = function(req, res) {
  Order.findByIdAndRemove(req.params.id, function(err, order) {
    if(err) { res.send(500, err); }
    res.json(200, {'deleted': true});
  });
};

module.exports = {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder
};
