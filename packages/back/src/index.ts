import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

import * as express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
