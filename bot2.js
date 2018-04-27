console.log(' The follow and replier bot is starting ');

var Twit = require('twit');
var config=require('./config');
var T=new Twit(config);

//Setting up a user stream
var stream=T.stream('user');

//Anytime someone follows me
//stream.on('follow',followed);
stream.on('tweet',tweetEvent);
/*
function followed(eventMsg){
    console.log("Follow event!");
    var name=eventMsg.source.name;
    var screenName=eventMsg.source.screen_name;
    tweetIt('.@'+screenName+' do you like #rainbows ?');
}
*/

function tweetEvent(eventMsg){
    console.log(eventMsg);

   // var fs=require('fs');
   // var json=JSON.stringify(eventMsg,null,2);
   // fs.writeFile("tweet.json",json);

    var replyto=eventMsg.in_reply_to_screen_name;
    var text= eventMsg.text;
    var from =eventMsg.user.screen_name;
    console.log(replyto +' '+from);

    if(replyto==='sachinrkp007'){
        var newTweet='@' +from+' Thankyou for tweeting me ! #codingrainbow'
        tweetIt(newTweet);
    }
}





//tweetIt();
//setInterval(tweetIt, 1000*20)

function tweetIt(txt){
var r=Math.floor(Math.random()*100);

var tweet={
    //status: 'here is a random number '+r+' #codingrainbow in node.js'
    status:txt
}
T.post('statuses/update', tweet,tweeted);

 function tweeted(err, data, response) {
     if(err){
         console.log("something went wrong");
     } else {
        console.log("It worked !");
     }
    
  }
}