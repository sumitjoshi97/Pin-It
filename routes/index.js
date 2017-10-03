var express = require('express');
var router = express.Router();

var Pin = require('../models/Pin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pins', function (req, res, next) {
  var successMsg = req.flash('success')[0];

  Pin.find(function (err, docs) {
    var pinChunks = [];
    var chunkSize = 5;

    for (var i = 0; i < docs.length; i += chunkSize) {
      pinChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('index', {
      title: 'Pins',
      pins: pinChunks,
      successMsg: successMsg,
      noMessages: !successMsg
    });
  });
});

router.post('/pins', (req, res) => {
	let body = req.body; 

	Pin.addPin(body, (err, pin) => {
		if(err) throw err;
		res.send(pin);
	});
});

module.exports = router;
