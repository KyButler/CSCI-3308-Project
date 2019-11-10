const passport = require('passport');
const router = require('express').Router();

const cleanUser = user => {
  /* All of the values are assigned to values in order to print without showing
  the users password_hash. This user.get uses user.js in order to retrieve the
  information wanted. -- comment more*/
  const values = {...user.get()};

  /* This line deletes the passwordHash, so that the user / console doesn't
  display it.*/
  delete values.passwordHash;

  return values;
}

  /* asks if user is logged in upon page load */
router.get('/', (req, res) => {
  if (req.isAuthenticated()){
    res.send(cleanUser(req.user));
  } else {
    res.send(null);
  }
});

/*The router recieves json input, and passport authenticates the information.*/
router.post('/', passport.authenticate('json'), (req, res) => {
  /* Sends the values to be displayed*/
  res.send(cleanUser(req.user));
});

router.delete('/', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
