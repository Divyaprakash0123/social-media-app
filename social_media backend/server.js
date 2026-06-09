require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
console.log("Auth Routes Loaded");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/posts", taskRoutes);

app.use("/api/auth", authRoutes);

app.get("/test", (req, res) => {
  res.send("Test Working");
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});
console.log("REGISTER ROUTE ADDED");
app.post("/register", (req, res) => {
  res.json({
    message: "Register Route Working",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
