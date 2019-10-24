const mongoose = require('mongoose')

// creating model for fireflies collection
const fireflySchema = mongoose.Schema({
	firefly_name: String,
	child_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Children' },
}); 

module.exports = mongoose.model('Fireflies', fireflySchema); 