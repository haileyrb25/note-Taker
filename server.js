const express = require('express');

//todo add required routes for api/html

//initialize the app and create a port
const app = express();
const PORT =process.env.PORT || 3001;

//todo set up same body parsing, static, and route the middleware


//start the server on the port
app.listen(PORT, () => console.log('This port is listening at ${PORT}'));