const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 20
	},
	id: {
		type: String,
		trim: true,
		unique: 1
	},
	password: {
		type: String,
		minlength:4	
	}
})

const User = mongoose.model('User', userSchema);
module.exports = { User } 