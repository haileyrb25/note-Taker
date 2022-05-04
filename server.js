const express = require('express');

//todo add required routes for api/html
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

//todo set up same body parsing, static, and route the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//start the server on the port
app.listen(PORT, () => console.log('This port is listening at ${PORT}'));