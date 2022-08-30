module.exports.go = function(req, res){
    return res.render('office',{
        title : 'office',
        type_of_map : 'office',
    });
}