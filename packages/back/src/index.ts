import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as routes from './routes';
import * as cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/todo', routes.todo);

app.listen(8000, () => {
  console.log('Listening on port 8000!');
});
