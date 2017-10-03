const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const UserSchema = new Schema({
	user_id: Number,
	email: String,
	password: String,
	created_at: String,
	avatar: String,
	avatar_updated_at: String
});

var User = module.exports = mongoose.model('User', UserSchema);