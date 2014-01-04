var express  = require('express'),
    app = express();
    
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/tmp'));

app.use(function(req, res) {

  var crawlers = [
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    'facebookexternalhit/1.1 (+https://www.facebook.com/externalhit_uatext.php)',
  ];

  var ua = req.headers['user-agent'];

  console.log('Index: ' + crawlers.indexOf(ua));

  if(crawlers.indexOf(ua) !== -1){
    res.sendfile(__dirname + '/tmp/snapshots/' + req.path.replace(/\//g, '_') + '.html');
  } else {
    return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url);
  }
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log('ChessPersonality started on port %d.', port);
});