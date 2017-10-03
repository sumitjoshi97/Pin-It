const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	body: String,
	user_id: Number,
	pin_id: Number,
	created_at: Date,
	updated_at: Date
});

var Comment = module.exports = mongoose.model('Comment', CommentSchema);