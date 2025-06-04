import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { loadRoutes } from './utils/routes-loader';

const app: Express = express();

// Middleware global
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(cookieParser());

loadRoutes(app); // Load routes dynamically from modules

export default app;
