require('dotenv').config();

const passport = require('./config/passport');
const express = require('express');
const app = express();

/* middleware */

/* stores session in cookie */
app.use(require('cookie-session')({name: 'session', secret: process.env.SECRET}));
/* makes log output look nice */
app.use(require('morgan')(process.env.NODE_ENV === 'production' ? 'common' : 'dev'));
/* allows for the parsing of text entry */
app.use(require('body-parser').json({limit: process.env.JSON_LIMIT || '8mb'}));
/* initializing passport */
app.use(passport.initialize());
app.use(passport.session());

/* making a request to /api/auth will reference ./routes/api/auth */

app.use('/api/auth', require('./routes/api/auth'));

// console.log that your server is up and running
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
