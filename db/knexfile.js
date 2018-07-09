const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_DEV_URL,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },
  test: {
    client: 'pg',
    connection: process.env.DATABASE_TEST_URL,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  }
};
