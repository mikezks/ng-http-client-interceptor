import * as express from 'express';
import { Application } from 'express';

import { Token } from './api/token';
import { Data } from './api/data';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

const token = new Token();
token.api(app);

const data = new Data();
data.api(app);

app.listen(8091, () => {
  console.log('Server is now running on port 8091 ...');
});
