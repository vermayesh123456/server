const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes");
const helmet = require("helmet"); // Import helmet
require("dotenv").config();

const app = express();
connectDB();

// Use Helmet with custom CSP settings
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        // Add other CSP directives as needed
      },
    },
  })
);

app.use(cors());
app.use(bodyParser.json());
app.use("/api/forms", formRoutes);

// Default route for root path
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
