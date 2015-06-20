var express = require('express')
  , router = express.Router()
  , Controller = require('../controllers/agendas')
  ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/agenda', function (req, res) {
	Controller.retrieve(req, res);
});

module.exports = router;
