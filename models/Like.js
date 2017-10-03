const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
	user_id: Number,
	pin_id: Number,
	created_at: Date,
	updated_at: Date
});

var Like = module.exports = mongoose.model('Like', LikeSchema);