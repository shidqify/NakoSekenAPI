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
};

const store = new confidence.Store(config);

exports.get = (key) => store.get(key);