import express from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import exphbs from 'express-handlebars';
// @ts-ignore
import indexRoutes from './routes/IndexRoutes'

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.resolve('src/views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.resolve('src/views/layouts'),
    partialsDir: path.resolve('src/views/partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

// Global Variables

// Routes
app.use(indexRoutes);

// Static files
app.use(express.static(path.resolve('src/public')));

export default app;
