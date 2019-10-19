var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

var tweet = {

status: 'post a tweet using twitter api!!' } 

T.post('statuses/update', tweet, tweeted); 

function tweeted(err, data, response) {

if(err){

console.log("Unable to post!");

}

else{

console.log("New post successful");

}
console.log(response);
} 