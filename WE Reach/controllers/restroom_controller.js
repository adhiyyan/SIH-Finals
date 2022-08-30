module.exports.go = function(req, res){
    return res.render('restroom',{
        title : 'restroom',
        type_of_map : 'restroom',
    });
}