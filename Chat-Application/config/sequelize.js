const common = {
  dialect: 'postgresql',
  define: {
    underscored: true
  },
  migrationStorageTableName: 'sequelize_meta',
  seederStorageTableName: 'sequelize_data'
};

module.exports = {
  development: Object.assign({
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'password',
    database: 'chatapp'
  }, common),
  production: Object.assign({
    url: process.env.DATABASE_URL,
    logging: false
  }, common)
};
