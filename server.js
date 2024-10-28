// server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/forms", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
