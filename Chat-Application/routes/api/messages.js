const router = require('express').Router();
const { Channel, Message, User, Sequelize: { ValidationError } } = require('../../models');

router.post('/', async (req, res, next) => {
/* take message and put it into the correct table. */
    try {
        const message = await Message.create({ ...req.body, sentById: req.user.id });
        const readBack = await Message.findOne({ where: { id: message.id }, include: { model: User, as: 'sentBy', attributes: ['displayname'] } });
        res.send(readBack);
    }
    catch (e) {
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