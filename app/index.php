<!doctype html>
<html ng-app="ChessPersonality" ng-controller="AppController">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <title ng-bind-template="{{page.title}}"></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
  
  <link rel="shortcut icon" href="/favicon.ico"/>
  <link rel="apple-touch-icon" href="/images/touch-icon-57.png"/>
  <link rel="apple-touch-icon" sizes="72x72" href="/images/touch-icon-72.png"/>
  <link rel="apple-touch-icon" sizes="114x114" href="/images/touch-icon-114.png"/>
  <link rel="apple-touch-icon" sizes="144x144" href="/images/touch-icon-144.png"/>

  <meta name="description" content=""/>
  <meta property="og:image" content="/images/sharing-image.png"/>
  <meta property="og:title" content="{{page.title}}"/>
  <meta property="og:url" content="http://chess.dev.suchego.pl/"/>
  <meta property="og:site_name" content="Chess Personality"/>
  <meta property="og:type" content="website"/>
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:url" content="http://chess.dev.suchego.pl/"/>
  <meta name="twitter:title" content="{{page.title}}"/>
  <meta name="twitter:description" content=""/>
  <meta name="twitter:image" content="http://chess.dev.suchego.pl/images/sharing-image.png"/>
  
  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oleo+Script:400,700"/>
  <link rel="stylesheet" href="/styles/style.css"/>
</head>
<body is-home>

  <header class="header">

    <div class="container clearfix">

      <a href="/" class="logo to-left" title="Chess Personality">ChessPersonality</a>
      
      <ul class="header-socials to-right">

        <li>
          <a ng-href="https://www.facebook.com/sharer/sharer.php?u=http://chess.dev.suchego.pl/" title="Share on Facebook" class="icon facebook" target="_blank"></a>
        </li>

        <li>
          <a ng-href="https://twitter.com/intent/tweet?url=http://chess.dev.suchego.pl" title="Share on Twitter" class="icon twitter" target="_blank"></a>
        </li>

        <li>
          <a ng-href="http://reddit.com/submit?url=http://chess.dev.suchego.pl" title="Share on Reddit" class="icon reddit" target="_blank"></a>
        </li>

        <li>
          <a ng-href="https://plus.google.com/share?url=http://chess.dev.suchego.pl" title="Share on Google+" class="icon gplus" target="_blank"></a>
        </li>

      </ul>
    
    </div>
    
  </header>

  
  <div class="content" ng-view></div>

  <footer class="footer">

    <div class="container clearfix">
      
      <p class="to-left">
        <img src="/images/footer-logo.png" width="87" height="28" class="to-left" />
        <span>-</span>
        <a href="http://chess.com" title="Play chess now for free with over 8 million players of all personality types!">
          Play chess now for free with over 8 million players of all personality types!
        </a>
      </p>

      <ul class="footer-links to-right">
        <li><a href="http://chess.com/about" title="About">About</a></li>
        <li><a href="http://chess.com/legal" title="Legal">Legal</a></li>
        <li>&copy; 2013 <a href="http://chess.com" title="Chess.com">Chess.com</a></li>
      </ul>

    </div>

  </footer>

  <div id="fb-root"></div>
  <script>
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>
  
  <script src="/scripts/vendor/jquery/jquery.min.js"></script>
  <script src="/scripts/vendor/angular/angular.min.js"></script>
  <script src="/scripts/vendor/angular-route/angular-route.min.js"></script>
  <script src="/scripts/vendor/angular-resource/angular-resource.min.js"></script>
  <script src="/scripts/vendor/facebook-plugin-directives/facebook-plugin-directives.js"></script>
  <script src="/scripts/app.js"></script>
  <script src="/scripts/controllers/app.js"></script>
  <script src="/scripts/controllers/home.js"></script>
  <script src="/scripts/controllers/test.js"></script>
  <script src="/scripts/controllers/personalities.js"></script>
  <script src="/scripts/directives/progress/progress.js"></script>
  <script src="/scripts/directives/stats/stats.js"></script>
  <script src="/scripts/directives/isHome/isHome.js"></script>
  <script src="/scripts/directives/slider/slider.js"></script>
</body>
</html>