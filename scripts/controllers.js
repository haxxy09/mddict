/* global angular */

'use strict';

/* Controllers */
var appSeedControllers = angular.module('appSeedControllers', [])

//home page controller
        .controller('MainController', function ($scope, $routeParams, $window, ModalService) {
            $scope.title = 'Meta Data Dictionary';

        })

        //data elements controller

        .controller('dataElementsController', function ($scope, dataElement, $routeParams, $window, ModalService) {
            //title on the page
            $scope.title = "Data Elements";
            //valeu used to make the api call
            var apiResource = "dataElements";

            $scope.grouped = true;
            $scope.apiname = apiResource;
            $scope.groupTitle = "Data element Groups";
            var apiGroupResource = "dataElementGroups";
            //calling a service to get all the data elements
            dataElement.listAllMetadata(apiResource).then(function (alldataelements) {
                $scope.result = alldataelements;

            });
            //calling a service to sget all the data element groups
            dataElement.listAllMetadata(apiGroupResource).then(function (alldataelements) {
                $scope.Groupresult = alldataelements;

            });

            dataElement.dataElementsDetails($routeParams.id).then(function (properties) {
              $scope.idResult = properties;
            });

            dataElement.dataElementGroupsDetails($routeParams.id).then(function (properties) {
              $scope.idResult= properties;
            });
        })

        .controller('indicatorsController', function ($scope, $routeParams, dataElement, $window, ModalService) {
            $scope.title = "Indicators";
            var apiResource = "indicators";
            $scope.grouped = true;
            $scope.apiname = apiResource;
            $scope.groupTitle = "Indicator Groups";
            var apiGroupResource = "indicatorGroups";

            dataElement.listAllMetadata(apiResource).then(function (alldataelements) {
                $scope.result = alldataelements;

            });
            dataElement.listAllMetadata(apiGroupResource).then(function (alldataelements) {
                $scope.Groupresult = alldataelements;

            });

            dataElement.indicatorsDetails($routeParams.id).then(function (properties) {
              $scope.idResult = properties;
            });

            dataElement.indicatorGroupsDetails($routeParams.id).then(function (properties) {
              $scope.groupResult = properties;
            });

        })

        .controller('DataSetsController', function ($scope, $routeParams, dataElement, $window, ModalService) {
            $scope.title = "Data Sets";
            var apiResource = "dataSets";
            $scope.apiname = apiResource;
            dataElement.listAllMetadata(apiResource).then(function (alldataelements) {

                $scope.result = alldataelements;

            });

            dataElement.dataSetsDetails($routeParams.id).then(function (properties) {
              $scope.idResult = properties;
            });

        })

        .controller('programsController', function ($scope, $routeParams, dataElement,$window, ModalService) {
            $scope.title = "Programs";
            var apiResource = "programs";
            $scope.apiname = apiResource;
            dataElement.listAllMetadata(apiResource).then(function (alldataelements) {

                $scope.result = alldataelements;

        });
        // https://dhis.cc.ac.mw/dhis/api/programs/QdI7Re8wlGT.json?fields=programTrackedEntityAttributes[name]
        // https://dhis.cc.ac.mw/dhis/api/programs/QdI7Re8wlGT.json?fields=organisationUnits[name]
        // https://dhis.cc.ac.mw/dhis/api/programs/QdI7Re8wlGT.json?fields=programStages[name]
            // var id = "QdI7Re8wlGT";
            dataElement.programsDetails($routeParams.id).then(function (properties) {
              $scope.idResult = properties;
            });
      })
      .controller('usersController', function ($scope, $routeParams, dataElement,$window, ModalService) {
          $scope.title = "Users";
          var apiResource = "users";
          $scope.apiname = apiResource;
          dataElement.listAllMetadata(apiResource).then(function (alldataelements) {

              $scope.result = alldataelements;

      });
      // https://dhis.cc.ac.mw/dhis/api/programs/QdI7Re8wlGT.json?fields=programTrackedEntityAttributes[name]
      // https://dhis.cc.ac.mw/dhis/api/programs/QdI7Re8wlGT.json?fields=organisationUnits[name]
      // https://dhis.cc.ac.mw/dhis/api/programs/QdI7Re8wlGT.json?fields=programStages[name]
          // var id = "QdI7Re8wlGT";
          dataElement.usersDetails($routeParams.id).then(function (properties) {
            $scope.idResult = properties;
          });
    })
        .controller('organisationUnitsController', function ($scope, $routeParams, dataElement, $window, ModalService) {
          $scope.title = "Organisation Units";
          $scope.grouped = true;
          var apiResource = "organisationUnits";
          $scope.apiname = apiResource;
          $scope.groupTitle = "Organisation Unit Groups";
          var apiGroupResource = "organisationUnitGroups";

          dataElement.listAllMetadata(apiResource).then(function (alldataelements) {

            $scope.result = alldataelements;
          });
          dataElement.listAllMetadata(apiGroupResource).then(function (alldataelements) {

            $scope.Groupresult = alldataelements;
          });

          dataElement.organisationUnitsDetails($routeParams.id).then(function (properties) {
            $scope.orgResults = properties;
          });

          dataElement.organisationUnitGroupsDetails($routeParams.id).then(function (properties) {
            $scope.orgGroupResults = properties;
          });
        });
