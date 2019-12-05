import express from 'express';
import connectDatabase from './config/db';
import bodyParser from 'body-parser';

const app = express();

connectDatabase();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API running'));

// Route
app.use('/api/subs', require('./api/subscriptions'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
