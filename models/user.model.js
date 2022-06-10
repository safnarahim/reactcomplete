const mongoose = require('mongoose')
const User = new mongoose.Schema(
{
Name: { type: String, required: true },
Email: { type: String, required: true, unique: true },
Password: { type: String, required: true },
},
{ collection: 'notes' }
)
const model = mongoose.model('Notes', User)
module.exports = model