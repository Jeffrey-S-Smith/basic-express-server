'use strict';

// dependencies
const express = require('express');
const cors = require('cors');

// my middleware
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');


// my error messages
const notFound = require('./error.handlers/404');
const serverError = require('./error.handlers/500');



// no database, so using this to store data
const people = [
  {
    'id': 1,
    'name': 'Jeffrey',
  },
  {
    'id': 2,
    'name': 'Jordan',
  },
  {
    'id': 3,
    'name': 'Andrea',
  },
];

// my application
const app = express();
app.use(cors());
app.use(express.json());
// app.use(logger);

// server routes
app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server');
});

app.get('/person', logger, (request,response)=> {
  response.send(people);
});

app.get('/person/:id', logger, validator(people));

// server error handling
app.get('*', notFound);
app.use(serverError);

// module.exports = {server: app, start: port => {
//   app.listen(port, () => console.log(`Listening on ${port}`));
// }};
module.exports = app;