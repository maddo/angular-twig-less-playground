<?php
  require_once('vendor/Twig/Autoloader.php');
  Twig_Autoloader::register();
  $twig = new Twig_Environment( new Twig_Loader_Filesystem("./views"));

  //generate html tag
  function generate_tag($tag, $attrs = [], $selfClose = false){

    $html = '<'.$tag;

    foreach($attrs as $attr_name => $attr_value) {
      $html .= ' '.$attr_name.'="'.$attr_value.'"';
    }

    if($selfClose) {
      $html .= ' />';
    } else {
      $html .= '></'.$tag.'>';
    }

    return $html;
  }

  //helper for massive scripts links generating
  $twig->addFunction(new Twig_SimpleFunction('scripts', function ($files){

    if(!is_array($files)) {
      $files = [$files];
    }

    $html = null;

    foreach($files as $file) {
      $html .= generate_tag('script', ['src' => $file.'.js'])."\n";
    }

    return $html;
  }, array('is_safe' => array('html'))));

  //helper for massive styles links generating
  $twig->addFunction(new Twig_SimpleFunction('styles', function ($files){

    if(!is_array($files)) {
      $files = [$files];
    }

    $html = null;

    foreach($files as $file) {
      $html .= generate_tag('link', ['href' => $file.'.css', 'rel' => 'stylesheet'])."\n";
    }

    return $html;
  }, array('is_safe' => array('html'))));

  //go go go!
  echo $twig->render('layout.html');
?>