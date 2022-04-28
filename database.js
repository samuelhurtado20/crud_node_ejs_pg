const { Pool } = require('pg')
var { config } = require('dotenv')
config()
console.log(process.env.NODE_ENV)
const pool = new Pool({
  user: process.env.NODE_ENV === 'PROD' ? process.env.PGUSER_PROD : process.env.PGUSER_DEV,
  host: process.env.NODE_ENV === 'PROD' ? process.env.PGHOST_PROD : process.env.PGHOST_DEV,
  database: process.env.NODE_ENV === 'PROD' ? process.env.PGDATABASE_PROD : process.env.PGDATABASE_DEV,
  password: process.env.NODE_ENV === 'PROD' ? process.env.PGPASSWORD_PROD : process.env.PGPASSWORD_DEV,
  port: process.env.NODE_ENV === 'PROD' ? process.env.PGPORT_PROD : process.env.PGPORT_DEV
})
module.exports = pool
