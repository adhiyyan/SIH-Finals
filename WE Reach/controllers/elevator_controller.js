module.exports.go = function(req, res){
    return res.render('elevator',{
        title : 'elevator',
        type_of_map : 'elevator',
    });
}