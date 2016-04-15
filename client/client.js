var app = angular.module('blueApp', []);

app.controller('BlueController', ['$http', function($http){
  var vm = this;
  vm.user = {};
  vm.userList = [];

  vm.getPeople = function() {
    console.log('getpeople ran');
    $http.get('/create').then(function(response){

      vm.userList = [];
      vm.userList = response.data;

      if (response.status !== 200){
        console.log('Error on getting data');
      }

    });
  };

  vm.deletePerson = function(person, index){
    console.log("index", index);
    var id = person._id;
    $http.delete('/delete/' + id).then(function(response){
      console.log('ajax delete call made');
    });
    vm.userList.splice(index, 1);
  };
}]);
