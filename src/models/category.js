import mongoose from 'mongoose';

let Category = function () {
	var categorySchema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		createdAt: {
			type: Date,
			default: new Date()
		}
	});

	return mongoose.model('category', categorySchema);
}



export default new Category();