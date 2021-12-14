import app from './server';

// Setup debug logger
const debug = require('debug')('welcome-api');

// Listen
app.listen(4000, () => {
  debug('Listening at http://localhost:4000')
});
