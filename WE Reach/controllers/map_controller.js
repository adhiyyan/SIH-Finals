const marker = require('../models/map')
module.exports.insert = function(req, res){
    console.log(req.body);
    if(req.body.typeOfMap == "restroom"){
        return res.render('restroom',{
        title : req.body.typeOfMap,
        type_of_map : req.body.typeOfMap,
    });
    }
    else if(req.body.typeOfMap == "restaurant"){
        return res.render('restaurant',{
        title : req.body.typeOfMap,
        type_of_map : req.body.typeOfMap,
    });
    }
    else if(req.body.typeOfMap == "office"){
        return res.render('office',{
        title : req.body.typeOfMap,
        type_of_map : req.body.typeOfMap,
    });
    }
    else if(req.body.typeOfMap == "library"){
        return res.render('library',{
        title : req.body.typeOfMap,
        type_of_map : req.body.typeOfMap,
    });
    }
    else if(req.body.typeOfMap == "elevator"){
        return res.render('elevator',{
        title : req.body.typeOfMap,
        type_of_map : req.body.typeOfMap,
    });
    }
    else {
        return res.render('trail',{
        title : req.body.typeOfMap,
        type_of_map : req.body.typeOfMap,
    });
    }
    
    
}
