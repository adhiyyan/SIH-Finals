const marker = require('../models/map')
module.exports.create = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);
    // return res.render('home', {
    //     title: "Home"
    // });
    console.log("Hello")
    console.log(req.body);
    marker.create({
        a : req.body.latitude,
        b : req.body.longitude,
        title : req.body.title,
        type : req.body.type
        // if(req.body.file)
    }, function(err, newContact){
        if(err){
            console.log("ERROR occured while creating contact", err);
            return;
        }
        console.log("Hello", newContact);
        return res.redirect('back');
    });
    return res.render('home',{
        title : "MAP"
    });
}
