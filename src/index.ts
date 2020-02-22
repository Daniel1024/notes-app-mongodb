require('dotenv').config();
import app from './server';

require('./database');

const port = app.get('port');
app.listen(port, () => console.log(`Server on port: ${port}`));
