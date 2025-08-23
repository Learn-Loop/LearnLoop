import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes/index.js";  // Import the index router

const app = express();

// CORS configuration - allow all origins for development
const corsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(json());

app.get("/", (req, res) => res.json({ status: "ok" }));

app.use('/', routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

export default app;
