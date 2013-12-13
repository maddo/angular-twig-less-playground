'use strict';
app.controller('TestController', ['$scope', '$resource', '$location', function ($scope, $resource) {

  var questions = $resource('/scripts/questions.json', {}, {
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

  //user answers
  var answers = [];

  $scope.response = function(answerIndex){
    //add user answer to answers bag
    answers.push({question: $scope.questionIndex , answer: answerIndex});

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
    console.log('Resulats!');
  };

}]);