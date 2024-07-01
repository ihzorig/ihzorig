const { Pool } = require("pg");
const dotenv = require("dotenv");
const colors = require("colors");

// dotenv.config({ path: "./config/.env" });

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
// });

const query = `
  CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    company VARCHAR(50) UNIQUE,
    position VARCHAR(50) UNIQUE,
    firstname VARCHAR(50) UNIQUE,
    lastname VARCHAR(50) UNIQUE,
    number VARCHAR(50) UNIQUE,
    email VARCHAR(200) UNIQUE,
    token VARCHAR(100) UNIQUE,
    username VARCHAR(10) UNIQUE,
    password VARCHAR(200) UNIQUE
  );
`;

pool
  .query(query)
  .then((response) => {
    console.log(`Table 'users' created successfully`.green);
  })
  .catch((err) => {
    console.error(`Error creating table 'users':`, err);
  })
  .finally(() => {
    pool.end(); // Close the pool
  });
