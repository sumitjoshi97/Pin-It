var passport = require('passport');
var User = require('../mdels/User');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser((user, callback) => {
	callback(null, user);
});

passport.desializeUser((obj, callback) => {
	callback(null, obj);
})

passport.use(new FacebookStrategy({
		clientID: 496351340726039,
		clientSecret: d061389faf76b5dd45cbf340abc0357d,
		callbackUrl: "http://localhost:3000/auth/facebook/callback"
	}, 
	(accessToken, refreshToken, profile, callback) => {
		User.findOrCreate({ facebookId: profile.id }, (err, user) => {
			return callback(err, user);
		});
	};
))