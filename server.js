var express  = require('express'),
    app = express();

app.use(require('prerender-node'));
app.use(express.logger('dev'));

console.log(app.settings.env);

if(app.settings.env === 'development') {
  app.use(express.static(__dirname + '/.tmp'));
} else if(app.settings.env === 'production') {
  app.use(express.static(__dirname + '/.tmp'));
}

app.use(function(req, res) {
  return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url);
});

app.listen(process.env.PORT || 5000);

console.log('ChessPersonality started!');