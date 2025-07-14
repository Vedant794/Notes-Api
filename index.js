// Import libraries
import dotenv from "dotenv";
import express from "express";
import { mongoConnection } from "./db/connection.js";
import authRouter from "./routes/authRoutes.js"; // Ensure .js if using ES modules
import notesRouter from "./Routes/notesRoutes.js";

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MongoDB URI is missing in .env");
  process.exit(1);
}

// Middlewares
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1", notesRouter);

// MongoDB Connection
mongoConnection(MONGO_URI);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});
