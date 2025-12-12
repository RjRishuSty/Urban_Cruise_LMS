// server.js
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const leadRoutes = require("./routes/lead.routes");
const metaRoutes = require("./routes/meta.routes");
const googleRoutes = require("./routes/google.routes");

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Connect to DB
connectDB();

// Testing Route
app.get("/api", (req, res) => {
  res.send("API is Working Fine...");
});

// Main Routes
app.use("/api/v1/leads", leadRoutes);
app.use("/api/v1/meta", metaRoutes);
app.use("/api/v1/google", googleRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
