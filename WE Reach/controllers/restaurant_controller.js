module.exports.go = function(req, res){
    console.log("well u came here")
    return res.render('restaurant',{
        title : 'restaurant',
        type_of_map : 'restaurant',
    });
}