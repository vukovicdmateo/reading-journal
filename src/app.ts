import express from 'express';

const app = express();

app.use(express.json({ limit: '10kb' }));

app.use('/', (_req, res) => {
  res.send('Hello from the server');
});

export default app;
