angular.module('starter.controllers', [])

.controller('SignCtrl', function($scope,$state) {

  $scope.user = {
    name: ""
  };

  $scope.signin = function()

{
  console.log($scope.user.name);
  $state.go('feed', {username: $scope.user.name});
}

})

.controller('FeedCtrl', function($scope, $http, $stateParams) {

  console.log($stateParams);


  $http.get("https://mip-message.herokuapp.com/messages").then(function(response){
      console.log(response);
    $scope.message = response.data;
  });
// Simple GET request example:
// $http({
//   method: 'GET',
//   url: 'https://mip-message.herokuapp.com/messages'
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//     console.log(response.data);
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });

  $scope.send = function()
  {
    var dataWithPost = {
      username: "user.name",
      message: "Message"
    };

  console.log(dataWithPost);

  $http.post("https://mip-message.herokuapp.com/messages", dataWithPost).then(function(reponse){
    console.log(response);
    $scope.data = response.data;
 
 });

}

})

/*
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}); */
