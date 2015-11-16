module.exports=
{
	requireAuthentication: function(req, res, next)
	{
		console.log('Private Route Hit!!');
		next();
	}, 
	logger: function(req, res, next)
	{
		//Print the Date
		console.log(new Date().toString() + ': Request ' + req.method + ' '+ req.originalUrl);
		next();
	}
}
