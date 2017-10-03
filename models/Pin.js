const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
	url: String,
	description: String,
	created_at: Date,
	updated_at: Date,
	user_id: Number,
	image_file_name: String,
	image_content_type: String,
	likes: Number,
	board_id: Number
});

var Pin = module.exports = mongoose.model('Pin', PinSchema);

module.exports.addPin = (data, callback) => {
	Pin.create(data, callback);
}