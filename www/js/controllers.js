angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.name = "chad";
    $scope.modal = modal;
  });
  $scope.openModal = function () {
    $scope.modal.show();
  };
  var nextId = 0;
  $scope.loginData = {};
  $scope.closeModal = function () {
    $scope.modal.hide();
    $scope.events.push({
      name:$scope.loginData.username,
      lastText:"test",
      id:nextId++
    });
  };
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.events = [];
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
});
