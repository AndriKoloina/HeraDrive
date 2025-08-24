const { Pool } = require('pg')
require('dotenv').config()

const db = new Pool({
    host: process.env.db_host,
    port : process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
})

module.exports = db