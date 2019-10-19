const express = require('express');
const app = express();
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
const userName = '';
app.post('/form', (req, res) => {
  name = req.body.userId
})
var params = {

q: name,

count: 10

}
var output = '';
T.get('search/tweets', params,searchedData); 

function searchedData(err, data, response) {
	
	output = data;
}

/*app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('index', {
  title: 'Tweets',
  tweet: output.statuses
});
});*/
const server = app.listen(3000, () => {
  console.log(output);
});


