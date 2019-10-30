const passport = require('passport');
const {Strategy: JsonStrategy} = require('passport-json');
const {User} = require('../models');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findOne({where: {id}})
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

passport.use(new JsonStrategy((username, password, done) => {
  User.findOne({where: {username}})
    .then(user => done(null, user && user.passwordMatches(password) ? user : false))
    .catch(err => done(err));
}));

module.exports = passport;
