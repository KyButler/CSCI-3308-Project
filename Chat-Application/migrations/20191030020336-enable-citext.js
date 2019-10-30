'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION citext')
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP EXTENSION citext')
  }
};
