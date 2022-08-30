module.exports.tick = function(req, res){
    return res.render('ticket',{
        title: "Ticket"
    });
}