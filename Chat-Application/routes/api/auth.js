const passport = require('passport');
const router = require('express').Router();

router.post('/', passport.authenticate('json'), (req, res) => {
  const values = {...req.user.get()};
  delete values.passwordHash;
  res.send(values);
});

module.exports = router;
