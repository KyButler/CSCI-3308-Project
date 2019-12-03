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
        return queryInterface.createTable('messages', {

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

            /* */
            content: {
                type: Sequelize.TEXT,
                allowNull: false
            },

            sent_by_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                },
                allowNull: false
            },

            channel_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'channels',
                    key: 'id'
                },
                allowNull: false
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
        }).then(() => queryInterface.addIndex('messages', ['sent_by_id'])).then(() => queryInterface.addIndex('messages', ['channel_id']));
    },

    /* on undo migration . . .*/
    down: (queryInterface, Sequelize) => {

        /* Simply drops the entire table users.*/
        return queryInterface.dropTable('messages');
    }
};
