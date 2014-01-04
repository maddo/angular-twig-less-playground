var express  = require('express'),
    app = express();

app.use(require('prerender-node').set('prerenderToken', 'RkX3xDFLbDC5VnswXtBl'));

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/tmp'));

app.use(function(req, res) {
  return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url);
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log('ChessPersonality started on port %d.', port);
});