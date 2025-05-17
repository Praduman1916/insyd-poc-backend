require('dotenv').config();

const config = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT, // Add this line
  dialect: 'mysql',
  dialectOptions: {
    ssl: { // Required for Railway
      require: true,
      rejectUnauthorized: false
    }
  }
};

module.exports = config;