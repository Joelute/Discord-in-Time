const mongoose = require('mongoose')

const DateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true
    },
    description: {
        type: String,
        trim: true 
    },
    timestamp: {
        type: String,
        required: [true, 'Must provide a timestamp']
    }
})

module.exports = mongoose.model('Date', DateSchema)
    
