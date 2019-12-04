/*sequelize password table / configuration to look at the correct chatapp db.
This file is referenced in ./models/index ,as it defines properties that the
model needs to use in order to connect to the pre-made database. */

/* common is an object containing information relating to what will be
consistent among other developers machines.*/
const common = {

  /*This dialect assumes that all of the users are using postgres(ql). */
  dialect: 'postgresql',

  /*This allows the generated table names to use snake_case instead of
  camelCase to match the formatting of the other columns. */
  define: {
    underscored: true
  },

  /* This specifies the column names of the migration and seeder columns */
  migrationStorageTableName: 'sequelize_meta',
  seederStorageTableName: 'sequelize_data'
};

/*module.exports is 'essentially' the return statement from the sequelize.js. It
allows for the developer to change their posgres username and password, returns
all of this information, and allows for different customizations between
development and production.*/
module.exports = {

  /* development branch is an object returned in the module exports object */
  development: Object.assign({

    /* custom postgres username can be specified as PG_USER in .env*/
    username: process.env.PG_USER || 'postgres',

    /* custom postgres password can be specified as PG_USER in .env*/
    password: process.env.PG_PASSWORD || 'password',

    /* database is assumed to be named chatapp, but can be customized if needed
    later, using a new entry in .env */
    database: 'chatapp'

    /*and, all of the information in common is assigned to development */
  }, common),

  /* production branch is an object returned in the module exports object */
  production: Object.assign({

    /* when in production, we're going to use a URL to access the db (most
  likely). This line accounts for that url, when we have it. It doesn't have
  a default yes, as we're not sure what that default may be.*/
      use_env_variable: 'DATABASE_URL',

    /* Sequelize can be told not to log when run, so things like username and
    status and those will not show up in the console when this production .env
    is run.*/
    logging: false

    /*and, all of the information in common is assigned to production */
  }, common)
};
