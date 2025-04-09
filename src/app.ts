import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { loadRoutes } from './utils/routes-loader';

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

loadRoutes(app); // Load routes dynamically from modules

export default app;
