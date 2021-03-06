const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bucketlist = require('./controllers/bucketlist');
const priorityController = require('./controllers/priorityController');

//Initialize our app variable
const app = express();

//Declaring Port
const port = 3000;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Hello There!! ");
});


//Routing all HTTP requests to /bucketlist to bucketlist controller
app.use('/bucketlist',bucketlist);
app.use('/priority',priorityController);

//Listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});

// Connect mongoose to our database
const config = require('./database');
mongoose.connect(config.database, {useNewUrlParser : true});