import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Post = function () {
	var postSchema = Schema({
		title: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		thumb: String,
		author: {
			type: Schema.Types.ObjectId,
			ref: 'users',
			required: true
		},
		createdAt: {
			type: Date,
			default: new Date()
		}
	});

	return mongoose.model('posts', postSchema);
}

export default new Post();