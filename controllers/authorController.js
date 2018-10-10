var Author = require('./models/author');

exports.author_list = function(req, res){
    res.send('Not IMPLEMENTED: Author list');   
};

//Display detail page for a specific author
exports.author_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Author detail: '+req.params.id);
};

//Display Author create form on GET
exports.author_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: Author create GET');
};

//Handle Author create form on POST
exports.author_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Author create POST');
};

//Display Author delete form on GET
exports.author_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: Author delete GET');
}; 

//Handle Author delete on POST
exports.author_delete_post= function(req,res){
    res.send('Not IMPLEMENTED: Author update POST');
};

//