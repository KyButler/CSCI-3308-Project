const passport = require('passport');
const router = require('express').Router();


/*The router recieves json input, and passport authenticates the information.*/
router.post('/', passport.authenticate('json'), (req, res) => {

  /* All of the values are assigned to values in order to print without showing
  the users password_hash. This user.get uses user.js in order to retrieve the
  information wanted. -- comment more*/
  const values = {...req.user.get()};

  /* This line deletes the passwordHash, so that the user / console doesn't
  display it.*/
  delete values.passwordHash;

  /* Sends the values to be displayed*/
  res.send(values);
});

module.exports = router;
