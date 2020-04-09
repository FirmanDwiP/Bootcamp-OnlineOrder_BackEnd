require('dotenv').config({path: ".env"})

module.exports =
{
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  operatorsAliases: 0
}