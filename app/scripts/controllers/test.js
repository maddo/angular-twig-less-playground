'use strict';
app.controller('TestController', ['$scope', '$resource', '$location', '$rootScope', '$analytics', function ($scope, $resource, $location, $rootScope, $analytics) {

  $analytics.pageTrack('/test');

  $rootScope.$emit('changeMeta', 'defaults');

  var questions = $resource('/scripts/data/questions.json', {}, {
    query: {method: 'GET', params: {}, isArray: false}
  });

  //all test questions
  $scope.questions = [];

  //current test question
  $scope.question = {};

  questions.query(function(res){
    $scope.questions = res.questions;
    $scope.question = $scope.questions[0];
    $scope.questionsNumber = $scope.questions.length;
  });

  //says which question is current
  $scope.questionIndex = 0;

  //update questionIndex when question changd
  $scope.$watch('question', function() {
    $scope.questionIndex = $scope.questions.indexOf($scope.question);
  });

  //bag with user's answers
  var scores = {};

  $scope.response = function(answerIndex){
    
    //user answer
    var answer = $scope.question.answers[answerIndex];

    //updating scores
    if(angular.isUndefined(scores[answer.stats])) {
      scores[answer.stats] = 1;
    } else {
      scores[answer.stats]++;
    }

    //try to get next question
    var nextQuestion = $scope.questions[$scope.questionIndex  + 1];

    if(!angular.isUndefined(nextQuestion)) {
      //change question to next one
      $scope.question = nextQuestion;
    } else {
      //or show results
      $scope.showResults();
    }
  };

  $scope.showResults = function(){
    
    $rootScope.scores = scores;

    //let's see how I am...
    var personalitySet = '';

    if(scores.attacking > scores.positional) {
      personalitySet += 'attacking,';
    } else {
      personalitySet += 'positional,';
    }

    if(scores.aggressive > scores.solid) {
      personalitySet += ' aggressive,';
    } else {
      personalitySet += ' solid,';
    }

    if(scores.intuitive > scores.calculating) {
      personalitySet += ' intuitive,';
    } else {
      personalitySet += ' calculating,';
    }

    if(scores.emotional > scores.calm) {
      personalitySet += ' emotional';
    } else {
      personalitySet += ' calm';
    }

    //...and who I am
    //by searching in personalities list
    var personality = $resource('/scripts/personalities.json', {}, {
      query: {method: 'GET', params: {}, isArray: false}
    });

    personality.query(function(res){

      for(var i = 0; i < res.personalities.length; i++) {
        var tmpPersonality = res.personalities[i];

        if(tmpPersonality.stats === personalitySet) {
          // I am tmpPersonality!
          $location.path('/type/' + tmpPersonality.url).replace();
        }
      }
    });

  };

  //iterate in alphabet,
  //should be in view, but ng-bind-template has no idea
  //what to do with String object :(
  $scope.answerLabel = function(answerIndex) {
    return String.fromCharCode(65 + answerIndex);
  };

}]);