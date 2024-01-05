var app = angular.module("Hanz", []);
app.controller("webController", ['$scope','$timeout', function($scope, $timeout) {
   var words = ["rat", "cat", "bat", "mat"];
   $scope.incorrectLettersTyped= [];
   $scope.correctLettersTyped =[];
   $scope.attempts = 6;
   $scope.displayWord ='';
   $scope.input = {
    letter : ''
   }
   var selectRandomWord = function () {
      var index = Math.round(Math.random()* words.length);
      return words[index];
   }
   var  newGame = function () {
      $scope.incorrectLettersTyped= [];
      $scope.correctLettersTyped =[];
      $scope.attempts=6;
      $scope.displayWord='';

      selectedWord  = selectRandomWord();
      //console.log(selectedWord);
      var showWord= '';
      console.log(selectedWord);
      for(var i=0;i<selectedWord.length;i++){
        showWord += '*';
      }
      console.log(showWord);
      $scope.displayWord = showWord;
   }
   $scope.letterChosen = function () {
     for(var i=0;i<$scope.correctLettersTyped.length;i++){
        if($scope.correctLettersTyped[i].toLowerCase()==$scope.input.letter.toLowerCase()){
          $scope.input.letter = "";
          return;
        }
        
      }
     for(var i=0;i<$scope.incorrectLettersTyped.length;i++){
        if($scope.incorrectLettersTyped[i].toLowerCase()==$scope.input.letter.toLowerCase()){
          $scope.input.letter = "";
          return;
        }
        
      }
      var correctLetter = false;
     for(var i=0;i<selectedWord.length;i++){
        if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
           //$scope.displayWord[i]= $scope.input.letter;
           $scope.displayWord = $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);
            correctLetter=true;
        }
      }
      if(correctLetter){
        $scope.correctLettersTyped.push($scope.input.letter.toLowerCase());
      }else{
        $scope.attempts--;
         $scope.incorrectLettersTyped.push($scope.input.letter.toLowerCase());
      }

      $scope.input.letter = "";
      if($scope.displayWord.indexOf('*') == -1){
        window.alert("You won!");
        $timeout(function() {newGame();}, 500);
      }
      if($scope.attempts==0){
        window.alert("you lost the game, try again");
        $timeout(function() {newGame();}, 500);
        
      }
     

   }
   newGame();
}])