module.exports.go = function(req, res){
    return res.render('library',{
        title : 'library',
        type_of_map : 'library',
    });
}