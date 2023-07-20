require('dotenv').config()

const config  = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,
  host: process.env.HOST || 'localhost',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUri: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, //cambiar postgres por mysql cuando use mysql
  apiKey: process.env.API_KEY
}

module.exports = { config }
