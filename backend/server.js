import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";

const __dirname = path.resolve();

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: `Too many requests, please try again later!`,
});

app.use(cors());
app.use(express.json());

app.use(limiter);
app.use("/api/products", productRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

}

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
  connectDb();
});
