import app from './server';

const port = app.get('port');
app.listen(port, _ => console.log(`Server on port ${port}`));
