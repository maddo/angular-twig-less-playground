var express  = require('express'),
    app = express();
    
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/tmp'));

app.use(function(req, res) {

  var crawlers = [
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    'facebookexternalhit/1.1 (+https://www.facebook.com/externalhit_uatext.php)',
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    '(compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20110814 Firefox/6.0 Google (+https://developers.google.com/+/web/snippet/)',
    'Yahoo:LinkExpander:Slingstone',
    'Mozilla/5.0 (compatible; Butterfly/1.0; +http://labs.topsy.com/butterfly/) Gecko/2009032608 Firefox/3.0.8',
    'NING/1.0',
    'Mozilla/5.0 (compatible; TweetmemeBot/3.0; +http://tweetmeme.com/)',
    'Twitterbot/1.0',
    'Google-HTTP-Java-Client/1.17.0-rc (gzip)',
    'JS-Kit URL Resolver, http://js-kit.com/'
  ];

  var ua = req.headers['user-agent'];

  if(crawlers.indexOf(ua) !== -1){
    return res.sendfile(__dirname + '/tmp/snapshots/' + req.path.replace(/\//g, '_') + '.html');
  } else {
    return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url);
  }
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log('ChessPersonality started on port %d.', port);
});