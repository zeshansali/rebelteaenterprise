var express = require('express'),
app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index.html', {
    title: "Rebel Tea Enterprise"
  });
});

app.listen(6969, function(){
  console.log("Martin is Great!");
});