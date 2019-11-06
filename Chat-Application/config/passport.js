/* derived from http://www.passportjs.org/docs/configure/, needs commenting*/

/*requires the passport library for maintaining users and login authentication*/
const passport = require('passport');

/* uses Json for the method of logging in. Simple, but otherwise we'd need to
use external logins such as oauth or a Google Account.*/
const {Strategy: JsonStrategy} = require('passport-json');

/* This is where the index and user js files come into play from ../models.
Every time that a user is referenced, it's getting information from that User.js
file.*/
const {User} = require('../models');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findOne({where: {id}})
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

/* Using the JSON recieved from the */
passport.use(new JsonStrategy((username, password, done) => {
  User.findOne({where: {username}})
    .then(user => done(null, user && user.passwordMatches(password) ? user : false))
    .catch(err => done(err));
}));

module.exports = passport;
