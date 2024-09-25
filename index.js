const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const validateToken = require("./middlewares/validateToken");
const database = require("./utils/dbConnection");



if(!process.env.PORT){
  console.log('please provide required environment variables');
  return process.exit();
}
database.connect()
// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user",validateToken, userRoutes);


app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}...`));
