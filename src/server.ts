import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler';
import { routes } from './routes';
import { config } from './config';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);


// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port http://localhost:${config.port}`);
});