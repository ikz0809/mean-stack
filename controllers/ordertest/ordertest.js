process.env.NODE_ENV = 'test';

var base  = process.env.PWD;
var config = require(base + '/config/config');
var mongoose = require('mongoose');
var orderapi = require(base + 'controller/order/orderapi');
var Order = require(base + 'models/order');
var should = require('should');
var testutil= require(base + 'test/util');

//help function for assertion
describe("Post API", function() {

  var newOrder;
  before(function (done) {
    mongoose.connect(config.db, function() {
      console.log("Connected to test");
      done();
    });

    newOrder = new Order({
      'name' : 'dummychicken',
      'quantity' : '2'
    });

    newOrder.save(function(err, record){
      if(err) {console.log(err);}
      id = newOrder._id;
      console.log("test id record: "+id);
    });
  });

  describe("Create Order:", function() {
    it("should create a new order", function (done){
        var req =  {
              body : {
                'name' : 'testname',
                'quantity': '2'
              }
          };

        var res = util.responseValidator(200, function(ordertest){
          ordertest.should.have.property('name');
          ordertest.should.equal('testname');
          done();
        });
        orderapi.createOrder(req, res);
      });
    })

  });
