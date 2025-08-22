import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";

import userRoutes from "./routes/user.route.js"

const app = express();

app.use(helmet());
app.use(cors());
app.use(json());

app.get("/", (req, res) => res.json({ status: "ok" }));

app.use('/api/v1/user',userRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

export default app;
