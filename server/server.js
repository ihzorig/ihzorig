const express = require("express");
const cors = require("cors");
const { dbconnect } = require("./config/dbconnect");
const dotenv = require("dotenv");
require("colors");

//routes
const companyRoutes = require("./routes/company");

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.SERVER_PORT;

//db
dbconnect();

app.use(express.json());
app.use(cors());
app.use("/api/v1/company", companyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.rainbow.bold);
});
