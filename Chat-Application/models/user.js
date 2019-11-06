const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.CITEXT,
      unique: true
    },
    password: {
      type: DataTypes.VIRTUAL,
      set: function(password) {
        this.setDataValue('password', password);

        /* bcrypt encrypts the password*/
        this.setDataValue('passwordHash', bcrypt.hashSync(password, 10));
      }
    },
    passwordHash: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    status: DataTypes.TEXT,
    displayname: DataTypes.TEXT,
    admin: DataTypes.BOOLEAN

  }, {tableName: 'users'});

  User.prototype.passwordMatches = function(password) {

    /* bcrypt takes a password and sees if it matches the passwordHash stored
    within the users row in the db.*/
    return bcrypt.compareSync(password, this.passwordHash);
  };

  return User;
};
