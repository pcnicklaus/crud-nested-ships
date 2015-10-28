var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Ship = require('../models/ships');
var mongoose = require('mongoose-q')(require('mongoose'));

router.get('/', function(req, res, next) {
  User.find(function(err,response){
      if(err){
        res.json({message:err});
      } else{
        res.json(response);
      }
  });

});

//save a new user
router.post('/', function(req, res, next) {
    var newUser = new User({
      name:req.body.name
    });
    console.log(req.body.name);
    newUser.saveQ()
    .then(function(result) {
        res.json(result);
    })
    .catch(function(err) {
        res.send(err);
    })
    .done();
});

//save a ship to a user
router.put('/:userid/ships', function(req, res, next) {
    var newShip = new Ship(req.body);
    newShip.saveQ();

    var update = { $push : {ships : newShip}};
    var options = {new:true};
    var id = req.params.userid;

    User.findByIdAndUpdateQ(id, update, options)
    .then(function(result) {
        res.json(result);
    })
    .catch(function(err) {
        res.send(err);
    });
});

//list a users events
router.get('/:userid/ships', function(req, res, next) {
  // var id = req.params.userid;
  console.log(req.params.userid);
    User.findById(req.params.userid)
    .populate('ships')
    .exec(function(err, user) {
        if(err) {
            res.send(err);
        } else {
            res.json(user.ships);
        }
    });
});


module.exports = router;
