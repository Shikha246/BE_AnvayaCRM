import express from "express";


import { initializeDatabase } from "./db/db.connect.js";
import reportRoutes from "./routes/reportRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import salesAgentRoutes from "./routes/salesAgentRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
const app = express();

app.use(cors());

//Middleware
app.use(express.json());


// ✅ Connect DB here
initializeDatabase();

// ✅ Routes
app.use("/api", authRoutes);
app.use("/api",leadRoutes);
app.use("/api",salesAgentRoutes);
app.use("/api", commentRoutes);

app.use("/api", reportRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});