import mongoose from 'mongoose';

let User = function () {
	var sampleSchema = mongoose.Schema({
		username: String,
		password: String,
		fullname: String,
		avatar: String,
		description: String,
		createdAt: Date,
		status: Boolean,
		updatedAt: Date,
	});

	return mongoose.model('users', sampleSchema);
}

export default new User();