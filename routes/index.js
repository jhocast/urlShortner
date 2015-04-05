exports.index = function(req, res){
	req.session.curRecord = {};
	console.log(req.session.currentUser);
	if (req.session.currentUser!=undefined) {
  		res.render('home', 
  			{ 
  				title: " Welcome, " + req.session.currentUser.username + "!", 
  				currentUser : req.session.currentUser
  			}
  		);
  	} else {
  		req.session.currentUser = {};
  		res.render('login', { title: 'Hangdog Happenstance' });
  	}
};