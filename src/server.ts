import express from 'express';
import morgan from 'morgan';

import { config } from './config/config';
import { loadRoutes } from './routes-loader';

export const app = express();

//global middleware
app.use(express.json());
app.use(morgan('tiny'));

// Load routes dynamically from modules

loadRoutes(app);

app.listen(config.server.port, () => {
    console.log(`Server is running on http://${config.server.host}:${config.server.port}`);
});
