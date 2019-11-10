/*Strict mode does a few things, like doesn't allow the programmer to assign a
value to an uncalled variable.*/
'use strict';

/* This file provides sequelize with a migration and its columns. It allows for
multiple different databases to have the same contents, enabling developers to
have a local copy.*/
module.exports = {

  /* on migration, a table is created with the following columns. queryInterface
   is the interface that Sequelize uses to talk to the diffrent databases */
  up: (queryInterface, Sequelize) => {

    /* Simply creates a table named users with the given columns.*/
    return queryInterface.createTable('users', {

      /* The first column is id, a unique value. Because it's the primary key,
      it's the main organization of the users. It is an integer and
      automatically increments on each row creation. It can't be null. It allows
      us to potentially have changeable usernames, since the id would always be
      the same.*/
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      /*The username is a unique login name. No two users can have the same
      username, and CITEXT makes sure of this. CITEXT internally calls lower
      when comparing values, but allows for custom capitalization. This can't be
      NULL.*/
      username: {
        type: Sequelize.CITEXT,
        allowNull: false,
        unique: true
      },

      /*The status is a users status that can be toggled from within the front
      end. It has presets, but in the DB is stored as plain text which allows
      for custom statuses. All that it is is a text, and it can be empty, and it
      can be the same as another users.*/
      status: Sequelize.TEXT,

      /* Displayname is the name that will be shown on the online list and on
      each message the user sends. This name is just TEXT, it can't be null, but
      it can be the same as someone elses. This is different from username, as
      username is what the user must use to log in, while this can be whatever
      (except for nothing)*/
      displayname: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      /* password_hash is an encrypted form of the user password. All that's
      stored in the database is a TEXT related to it, and it can't be empty.
      This value is calculated using Passport and a 'secret key'.*/
      password_hash: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      /* admin is simply a boolean to tell whether a user is an admin of the
      website. This will allow developers to set custom flags that can only be
      used if admin, mainly for testing different parts later on.*/
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },

      /* This is a date that simply logs when the user was created. It can't be
      empty.*/
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      /* This is a date that logs when the user was updated. While unsure
      currently what information will be stored here, it's here in the event
      logging needs to occur on user edit. It also can't be empty. */
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  /* on undo migration . . .*/
  down: (queryInterface, Sequelize) => {

    /* Simply drops the entire table users.*/
    return queryInterface.dropTable('users');
  }
};
