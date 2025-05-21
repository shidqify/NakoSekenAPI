require('dotenv').config();
const confidence = require('confidence');

const config = {
  port: process.env.PORT,
  authentication: process.env.TOKEN_SECRET,
  redisCache: {
    host: process.env.REDIS_CACHE_HOST,
    port: process.env.REDIS_CACHE_PORT,
    password: process.env.REDIS_CACHE_PASSWORD,
    index: process.env.REDIS_CACHE_INDEX,
    connection: {
      host: process.env.REDIS_CACHE_HOST,
      port: process.env.REDIS_CACHE_PORT,
      password: process.env.REDIS_CACHE_PASSWORD,
    },
  },
  db: {
    development: {
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || null,
      database: process.env.DB_NAME || 'mydb',
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: 'postgres' // or 'postgres', 'sqlite', etc.
    },
    test: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'postgres'
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'postgres'
    }
  }
};

const store = new confidence.Store(config);

exports.get = (key) => store.get(key);