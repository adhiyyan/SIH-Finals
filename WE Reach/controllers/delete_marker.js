const marker = require('../models/map')
module.exports.delete = function(req, res){
    let id = req.body.id;
    let temp = marker.findByIdAndDelete(id, function(err){
        if(err){
            console.log("ERROR occured while creating contact");
            return;
        }
        return res.redirect('back');
    });
}