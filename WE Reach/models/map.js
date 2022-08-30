const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    a: {
        type: String,
    },
    b: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    type :{
        type:String,
        required : true,
    },
    str :{
        type : String,
    }
}, {
    timestamps: true
});


const Map = mongoose.model('Map', mapSchema);

module.exports = Map;