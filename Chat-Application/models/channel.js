module.exports = (sequelize, DataTypes) => {
    const Channel = sequelize.define('Channel', {
    name: {
      type: DataTypes.TEXT,
      unique: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,

  }, {tableName: 'channels'});
  return Channel;
};
