const express = require("express");
const cors = require("cors");
require("colors");
require("dotenv").config({ path: "./config/config.env" });

//db
const connectDB = require("./config/DBconnect");
//-------------------

const usersrouter = require("./routes/user");

//database
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", usersrouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`.rainbow.bold);
});
