var myApp = angular.module("myApp", ['ui.router']);



myApp.config(function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.when("", "/state1");

    $stateProvider
        .state("state1", {
            url: "/state1/:DeptId/:DeptName",
            templateUrl: "Partials/State1.html",
            controller: function ($scope, $stateParams) {
                //debugger;
                //alert($stateParams.DeptId + " " + $stateParams.DeptName);
                $scope.DeptID = $stateParams.DeptId;
                $scope.DeptName = $stateParams.DeptName;
            }
        })
        .state("state2", {
            url: "/state2/:EmpId/:EmpName",
            templateUrl: "Partials/State2.html",
            controller: function($scope, $stateParams) {
            //debugger;
            //alert($stateParams.EmpID + " " + $stateParams.EmpName);
            $scope.EmpId = $stateParams.EmpID;
            $scope.EmpName = $stateParams.EmpName;
        }
    });
  
});

//.state("DepartmentList", {
//    url: "/Details/:DeptId/:DeptName",
//    templateUrl: "/Partials/State1.html",
//    controller: function ($scope, $stateParams) {
//        alert($stateParams.DeptId + " " + $stateParams.DeptName);
//        $scope.DepartmentId = $stateParams.DeptId;
//        $scope.DepartmentName = $stateParams.DeptName;
//    }
//});



//var contacts = {
//    name: 'state1',
//    templateUrl: "Partials/State1.html",
//    data: {
//        customData1: 5,
//        customData2: "blue"
//    }
//}
//$stateProvider
//    .state("state1", {
//        templateUrl: 'Partials/State1.html',
//        data: {
//            customData1: 44,
//            customData2: "red"
//        }
//    });

//$stateProvider.state("state1", {
//    template: '<h1>{{contact.title}}</h1>',
//    controller: function() {
//        this.title = 'My Contacts';
//    },
//    controllerAs: 'contact'
//});


//.state('group.departments', {
//    url: '/departments',
//    templateUrl: 'partials/state1.html',
//});
//.state('group.programm', {
//    url: '/programm',
//    templateUrl: 'partials/program.html'
//});
//.state("page3", {
//    url: "/page3",
//    templateUrl: "/Page-3.html"
//});

//myAppControllers.controller('DepartmentController', ['$scope', 
//  function ($scope) {

//      $scope.groups  = [
//          {
//              'id': 'state1',
//              'name': 'My first group'
//          },
//          {
//              'id': 'state2',
//              'name': 'My secord group'
//          },
//        ];

//  }]);