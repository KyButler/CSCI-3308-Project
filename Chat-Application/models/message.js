module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        content: {
            type: DataTypes.TEXT,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,

    }, { tableName: 'messages' });

    Message.associate = models => {
        Message.belongsTo(models.Channel, {
            as: 'channel',
            foreignKey: {
                name: 'channelId',
                field: 'channel_id'
            }
        });
        Message.belongsTo(models.User, {
            as: 'sentBy',
            foreignKey: {
                name: 'sentById',
                field: 'sent_by_id'
            }
        });
    };

    return Message;
};
