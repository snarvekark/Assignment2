//Author Sheetal N
var express = require('express');
var app = express();
const expressValidator = require('express-validator')
const { check, validationResult } = require('express-validator');
const router = express.Router()
const bodyParser = require('body-parser')
const port = 3000;
app.use(express.static('../library'));
app.use(bodyParser.urlencoded({extended: false}));
var Twit = require('twit');
var config = require('./config');
var output = '';
var userId = 'mscdsn';

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

  var T = new Twit(config);
  var params = {

  q: userId,

  count: 30

  }

  T.get('search/tweets', params, searchedData); 

    function searchedData(err, data, response) {

      output = data;
      
    }

/*app.post('/user', [
  // username must be valid
  check('uName').isEmpty(),
  // valid username
  check('userId').isEmpty()
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  get_tweets(req.body.userId);
});*/

app.post('/submit', function (req, res) {
    console.log(req.body.userId);
    console.log(output);
    res.render('index', {
    title: 'Tweets',
    tweet: output.statuses
  });
});

var server = app.listen(5000, function () {
    console.log("Server is Runing");
});