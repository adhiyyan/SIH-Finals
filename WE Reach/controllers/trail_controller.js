module.exports.go = function(req, res){
    return res.render('trail',{
        title : 'trail',
        type_of_map : 'trail',
    });
}