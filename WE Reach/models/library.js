const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
    a: {
        type: String,
    },
    b: {
        type: String,
    },
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const library = mongoose.model('library', librarySchema);

module.exports = library;