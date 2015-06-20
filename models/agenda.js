var mongoose = require('mongoose')
  , Schema = mongoose.Schema 
  ; 

var AgendaSchema = new Schema({
	name:{type: String, default:'', require:true},
	phone:{type:Number, min:0},
	color:{type: String},
	operator:{type: String, default:''},
	category:{type: String, default:''},
	create_id:{type: Date, default: Date.now}
});

module.exports = mongoose.model('Agenda', AgendaSchema);