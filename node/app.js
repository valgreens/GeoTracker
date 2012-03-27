
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.post('/nuevo', function(req, res) {
	console.log('nuevo mensaje');
	res.render('gracias', {title: "gracias"});
});
app.get('/listado', function(req, res) {
	res.render('listado', {title: "listado"});
});

app.get('/api', function(req, res) {
  console.log(req.query.id);
  console.log(req.query.latitud);
  console.log(req.query.longitud);
  console.log("------");

  var json = {
    "id": req.query.id, 
    "latitud": req.query.latitud, 
    "longitud": req.query.longitud
  };

  res.writeHead(200, {
    "Content-Type": "application/json", 
    "Content-Length": json.length
  });
  res.end(json);

});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
