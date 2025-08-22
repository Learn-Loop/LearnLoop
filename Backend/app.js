import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';


const app = express();

app.use(helmet());
app.use(cors());
app.use(json());


app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

export default app;