import {connect} from 'mongoose';

const host = process.env.DB_HOST || '127.0.0.1';
const port = process.env.DB_HOST || '27017';
const db = process.env.DB_DATABASE || 'notes-app';

connect(`mongodb://${host}:${port}/${db}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('Database is connected.'))
    .catch(err => console.error(err));
