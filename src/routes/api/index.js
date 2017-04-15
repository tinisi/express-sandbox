/* GET api root page. */
module.exports = function(app) {

	app.get('/api', function(req, res){
  		res.render('api/index', { title: 'API Root' });
	});

}
