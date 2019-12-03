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

module.exports = router;