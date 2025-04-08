import app from './app';
import { config } from './config/config';
import { loadRoutes } from './utils/routes-loader';

// Load routes dynamically from modules
loadRoutes(app);

app.listen(config.server.port, () => {
    console.log(`Server is running on http://${config.server.host}:${config.server.port}`);
});
