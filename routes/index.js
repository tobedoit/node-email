var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')('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');
var Hogan = require('hogan.js');
var fs = require('fs');

// get file
var template = fs.readFileSync('./views/email.hjs', 'utf-8');
// compile template
var compiledTemplate = Hogan.compile(template);

/* GET home page. */
router.get('/', function(req, res, next) {

	sendgrid.send({
	  to:       '2dois2be@gmail.com',
	  from:     'noreply@zmes.handsome',
	  subject:  'Hello World',
	  html:     compiledTemplate.render({firstName: 'zmes'})
	}, function(err, json) {
	  if (err) { return res.send('what is wrong?'); }
	  res.send('it works!!!!!!')
	});
});

router.get('/preview', function(req, res) {
	res.render('email', {firstName: 'Zmes'});
});

module.exports = router;


