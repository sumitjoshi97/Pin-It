const mongoose  require('mongoose');

const BoardSchema = new mongoose.Schema({
	name: String,
	board_id: Number,
	created_at: Date,
	updated_at: Date,
	user_id: Number,
	description: String
});

var Board = module.exports = mongoose.model('Board', BoardSchema);