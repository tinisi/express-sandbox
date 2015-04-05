/* GET api root page. */
exports.index = function(req, res){
  res.render('api/index', { title: 'API Root' });
};
