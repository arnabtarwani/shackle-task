require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const middlewares = require('./middlewares/middleware.js');
const mongoose = require('mongoose');
// Custom Imports
const router = require('./routes/routes');

// Initializing Express App
const app = express();
// Connection with mongoose
mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// Adding middlewares for the app to use 
app.use(morgan('common'));
// Parsing the requests in JSON
app.use(bodyParser.json());
// To Compress JS
app.use(compression());
// To hide HTTP headers
app.use(helmet());
// Initializing router
app.use('/api', router);
// Adding middleware => ErrorHandler & notFound
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
// Setting Port for running the server
app.set('port', process.env.PORT || 1337);
// Allowing use of public files including HTML, CSS & JS
app.use(
    express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);

module.exports = app;