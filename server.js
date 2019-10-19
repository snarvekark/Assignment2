var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
var uname='';

app.post('/post_tweet', function (req, res) {
    uName = req.body.userId;
    
    res.send(uName + ' Submitted Successfully!');
    res.sendFile(__dirname + '/get_tweet.js', uName, function (err) {
    if (err) {
      console.log('Could not post data')
    } else {
      console.log('Request Sent')
    }
  })
});

var server = app.listen(3000, function () {
    console.log('Server is running');
});