import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

import * as express from 'express';
import { json } from 'body-parser';
import * as routes from './routes';

const app = express();
app.use(json());

app.use('/user', routes.user);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
