var express = require('express')
  , router = express.Router()
  , Controller = require('../../controllers/agendas')
  ;

/* GET Agenda. */
router.get('/', function (req, res) {
	Controller.retrieve(req, res);
});

router.get('/:id', function (req,res) {
	Controller.findOne(req, res);
});

router.post('/', function (req, res) {
	Controller.salvaContato(req, res);
});

// router.put('/:id', function(req, res){
// 	Controller.update(req, res);
// });

router.delete('/:id', function (req, res) {
	Controller.delete(req, res);
});


module.exports = router;
