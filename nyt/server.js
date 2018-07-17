var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Article = require('./models/Article.js');
var app = express();

var mongoDb = 
process.env.MONGODB_URI || 
process.env.MONGOHQ_URL || 
'mongodb://localhost/nytimes';



mongoose.connect(mongoDb, function(err,res){
	if(err){
		console.log("Error connection to: " + mongoDb + '. ' + err);
	} else {
		console.log("Succeeded connecting to: " + mongoDb);
	}
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));
app.use('/static', express.static('app'));

var PORT = process.env.PORT || 3000;
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})
app.get('/api/articles', function(req, res) {
  Article.find({}).limit(5)
    .exec(function(err, doc){
      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/articles', function(req, res){
  var newSearch = new Article(req.body);
  console.log("BODY: " + req.body.location);
  Article.create({"title": title}, function(err){
    if(err){
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  })
});

app.listen(PORT, function(){
	console.log('Express Server is up on port ' + PORT);
})