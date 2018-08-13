import mongoose from 'mongoose';
import passwordHash from 'password-hash';

let User = function () {
	var userSchema = mongoose.Schema({
		username: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		fullname: String,
		avatar: String,
		description: String,
		createdAt: {
			type: Date,
			default: new Date()
		}
	});

	userSchema.pre('save', function(next){
		this.password = passwordHash.generate(this.password);
		next();
	});

	return mongoose.model('users', userSchema);
}



export default new User();