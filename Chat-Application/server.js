/* dotenv is a file, literally named ".env", that can control certain variables
allowing for multiple developers to have their own personal configurations.
A good example of how it is used is when a local SQL database has a login, and
this login username / password will probably vary per person. An example of this
is being used when the .env file has "SECRET = $...", and this file can read
that SECRET by calling process.env.SECRET. It's basically just a local variable
hidden in a file.*/
require('dotenv').config();

/* Includes the passport Library. Passport is a library build around user
logging in and authentication. While there are many endpoints that this Library
is built to use, the Chat-App simply uses it for password verification given a
unique key. It requires express to be used. */
const passport = require('./config/passport');

/* Express is a web framework built for Node JS. It's being used in order to
do req and res procedures, as well as run the groundwork for the passport
library to function. Calls such as app.use are being directed at express. */
const express = require('express');

/* Creates an Express application. The express() function is a top-level
function exported by the express module. */
const app = express();

/* **Calling an app.use means it's middleware ** Cookie-sesson is a simple
middleware that stores the session data on the client within a cookie. In our
app, we use this in order to store the SECRET key which is being used to encrypt
our passwords. Again, env.SECRET is being pulled from the .env file. The cookies
names is session.*/
app.use(require('cookie-session')({name: 'session', secret: process.env.SECRET}));

/* Morgan is a middleware designed to make logs cleaner for HTML uses. It's
clear that when logs are outputted, they're done in a much nicer way.*/
app.use(require('morgan')(process.env.NODE_ENV === 'production' ? 'common' : 'dev'));

/* Parse incoming request bodies in a middleware before your handlers, available
under the req.body property. This is used for text entry, what happens is a user
enters something in a text box, clicks submit, and the text box's contents will
be given to the req.body, given that it's watching the text box's name. The
JSON_LIMIT is again defined in .env, but makes it so a user can't insert text
that's over 8mb (a bit much!). */
app.use(require('body-parser').json({limit: process.env.JSON_LIMIT || '8mb'}));

/* initializing passport to be used within auth.js*/
app.use(passport.initialize());
app.use(passport.session());

/* making a request to /api/auth will reference ./routes/api/auth. This means
that if the browser attempts to make a call to the URL /api/auth, the auth.js
code will run (more can be seen in ./routes/api/auth.js) */
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/channels', require('./routes/api/channels'));
app.use('/api/messages', require('./routes/api/messages'));

/* Places the port at the defined PORT in .env, or instead defaults to 7217.
This port can probably be from 1->9999 given nothing else is running on that
port */
const port = process.env.PORT || 7217;

/* Starts a UNIX socket and listens for connections on the given path. In this
case, 7217 was just assigned the port above, and so port is equal to 7217. Once
the socket is active, it will log "Listening on port 7217", or whatever other
.env the user assigned to it.*/
app.listen(port, () => console.log(`Listening on port ${port}`));
