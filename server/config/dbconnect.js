const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const colors = require("colors");
const winston = require("winston");

dotenv.config({ path: "./config/config.env" });

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize({
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

// Logger setup
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "error.log",
      level: "error",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});

// Database connection function
const dbconnect = async () => {
  try {
    await sequelize.authenticate();
    logger.info(
      `Connection to PostgreSQL database has been established successfully on ${process.env.DB_HOST}`
    );
    console.log(
      `Connection to PostgreSQL database has been established successfully on ${process.env.DB_HOST}`
        .blue.bold
    );
  } catch (error) {
    logger.error(`Unable to connect to the database: ${error.message}`);
    console.error("Unable to connect to the database:", error);
  }
};

// Export sequelize instance and dbconnect function
module.exports = {
  sequelize: sequelize,
  dbconnect: dbconnect,
};
