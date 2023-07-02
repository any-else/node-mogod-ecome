const dev = {
  app: {
    port: process.env.NODE_ENV_DEV_PORT || 8080,
  },
  db: {
    port: process.env.NODE_ENV_DEV_DB_MYSQL_PORT || 4000,
    host: process.env.NODE_ENV_DEV_DB_MYSQL_HOST || 'localhost',
    name: process.env.NODE_ENV_DEV_DB_MYSQL_NAME || 'devEcome',
  },
};
const pro = {
  app: {
    port: process.env.NODE_ENV_PRO_PORT || 8081,
  },
  db: {
    port: process.env.NODE_ENV_PRO_DB_MYSQL_PORT || 4000,
    host: process.env.NODE_ENV_PRO_DB_MYSQL_HOST || 'localhost',
    name: process.env.NODE_ENV_PRO_DB_MYSQL_NAME || 'proEcome',
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';
module.exports = config[env];
