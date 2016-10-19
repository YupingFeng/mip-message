
//bring in the necessary dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//Configure the express web server framework
var app = express();
app.set('port', (process.env.PORT || 80));
app.use(bodyParser.json());
app.use(cors());

//Define the API routes for our application
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var messages = [
    {
        username: "Mr. A",
        message: "Hello World"
    },
    {
        username: "Mr. B",
        message: "Good Day"
    }
];

//
// /messages
// get
// post
app.get('/messages', function (req,res){
    res.json(messages);
});

app.post('/messages', function (req,res){
    messages.push({
        username:req.body.username,
        message: req.body.message
    });
    res.json(messages);
});

//Activate the express server
app.listen(process.env.PORT ||  3000, function () {
  console.log('Example app listening on port 3000!');
});