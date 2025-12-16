
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const leadRoutes = require("./routes/lead.routes");
const metaRoutes = require("./routes/meta.routes");
const googleRoutes = require("./routes/google.routes");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev")); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Connect to DB
connectDB();

// Testing Route
app.get("/api", (req, res) => {
  res.send("API is Working Fine...");
});

// Main Routes
app.use('/api/v1/auth',authRoutes)
app.use("/api/v1/leads", leadRoutes);
app.use("/api/v1/meta", metaRoutes);
app.use("/api/v1/google", googleRoutes);

console.log("JSON PARSER TEST WORKING");

// Start Server
app.listen(PORT, () => {
   const renderURL = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
  console.log(`🚀 Server running at ${renderURL}`);
  console.log("📦 Ready to accept requests");
});
