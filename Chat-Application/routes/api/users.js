const passport = require('passport');
const router = require('express').Router();
const { User, Sequelize: { ValidationError } } = require('../../models');

router.post('/', async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        req.login(user, err => {
            if (err) { //500 errorrrrrrrrr
                next(err);
            } else {
                res.send(user);
            }
        });
        // req.body is parsed from the JSON sent to the server, should contain all required attributes including `password`
        // User.create is a Sequelize method that takes an object containing the attributes to set
        // await is used because User.create is asyncronous, and we have to wait till it's done
        // res.send sends a response back to the client containing the newly created user (with id set)
    } catch (e) {
        if (e instanceof ValidationError) {
            // if Sequelize validation fails, send a 422 response code (Unprocessable Entity)
            // the response will contain the validation error contents
            res.status(422).send(e.errors);
        } else {
            // we don't know what to do with the error otherwise
            // since this handler is defined with `async`, we pass the error to the "next" express handler
            // probably will just result in a 500 error back to the client, and an error in the log
            next(e);
        }
    }
});

module.exports = router;