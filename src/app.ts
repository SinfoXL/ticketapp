import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

export default app;
