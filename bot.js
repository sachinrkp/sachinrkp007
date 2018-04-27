console.log(' The bot is running');

var Twit = require('twit');
var config=require('./config');
var T=new Twit(config);

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
var params={
     q: 'rainbow', 
    count: 2 
}   
T.get('search/tweets', params, gotData);
 function gotData(err, data, response) {
   var tweets =data.statuses;
   for(var i=0;i<tweets.lenght;i++){
       console.log(tweets[i].text);
   }
  }