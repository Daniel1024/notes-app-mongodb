import express from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.resolve('src/views'));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

// Global Variables

// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Static files
app.use(express.static(path.resolve('src/public')));

export default app;
