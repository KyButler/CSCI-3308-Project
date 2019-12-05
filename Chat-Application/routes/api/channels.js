const router = require('express').Router();
const {Channel, Message, User} = require('../../models');

router.get('/', async (req, res) => {
    // returns channel list
    res.send(await Channel.findAll());
});

router.get('/:id/messages', async (req, res) => {
    //send over message list
    res.send(await Message.findAll({ where: { channelId: req.params.id }, include: { model: User, as: 'sentBy', attributes: ['displayname'] } }));
});

router.post('/', async (req, res, next) => {
    /* create a new channel */
    try {
        const channel = await Channel.create({ ...req.body, created_at:now(), updated_at:now() });
        res.send(await Channel.findAll());
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

module.exports = router;