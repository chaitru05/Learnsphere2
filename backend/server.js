// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db.js"; // connect DB
import "./config/firebaseAdmin.js"; // init firebase admin
import studyMaterialRoutes from "./routes/studyMaterialRoutes.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5174", // your frontend origin
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api/study", studyMaterialRoutes);
// Routes


app.listen(5000, () => console.log("🚀 Server running on port 5000"));
