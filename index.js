var express = require('express'),
app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/*            *
 *  GET VIEWS *
 *           */
app.get('/', function(req, res){
  res.render('index.html', {
    title: "Rebel Tea Enterprise"
  });
});

app.get('/ask', function(req, res){
  res.render('ask.html', {
    title: "Ask an Expert"
  });
});

app.get('/awards', function(req, res){
  res.render('awards.html', {
    title: "Awards"
  });
});

app.get('/beans', function(req, res){
  res.render('beans.html', {
    title: "Beans"
  });
});

app.get('/blogs', function(req, res){
  res.render('blogs.html', {
    title: "Blogs"
  });
});

app.get('/brewGear', function(req, res){
  res.render('brewing-gear.html', {
    title: "Brewing Gear"
  });
});

app.get('/cart', function(req, res){
  res.render('cart.html', {
    title: "Cart !Will be Split!"
  });
});

app.get('/classes', function(req, res){
  res.render('classes.html', {
    title: "Classes"
  });
});

app.get('/gifts', function(req, res){
  res.render('gift-sets.html', {
    title: "Gift Sets"
  });
});

app.get('/guides', function(req, res){
  res.render('guides.html', {
    title: "Brew Guides"
  });
});

app.get('/locations', function(req, res){
  res.render('locations.html', {
    title: "Locations"
  });
});

app.get('/story', function(req, res){
  res.render('our-story.html', {
    title: "Our Story"
  });
});

app.get('/subscriptions', function(req, res){
  res.render('subscriptions.html', {
    title: "Subscriptions"
  });
});

app.get('/vigilanteGear', function(req, res){
  res.render('vigilante-gear.html', {
    title: "Vigilante Gear"
  });
});

app.get('/wholesale', function(req, res){
  res.render('wholesale.html', {
    title: "Wholesale"
  });
});

/*                *
 *  START SERVER  *
 *               */
app.listen(6969, function(){
  console.log("Martin is Great!");
});