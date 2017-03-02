/* global angular */


//code

'use strict';

/**
 * Function will retrieve the root URL for domain it's running on.
 *
 * @returns {string} : the currently root hostname
 */
function getHostRoot() {

    //return location.protocol + '//' + location.hostname;
    return location.protocol + '//' + location.hostname + ':' + location.port;
}

/**
 * Function will return the subfolder name for the DHIS installation on the server
 * which varies from DHIS installation to installation.
 */
function getDHISInstallFolder() {
    var pathArray = window.location.pathname.split('/');
    //console.log(pathArray[1]);
    var pathName = pathArray[1];
    //console.log(pathName);
    if (pathName == 'apps') {
        pathName = '';
    }
    return pathName;
}

function getApiRoot() {
    console.log(getHostRoot() + '/' + getDHISInstallFolder());
    return getHostRoot() + '/' + getDHISInstallFolder();
}


/* Services */

var appSeedServices = angular.module('appSeedServices', ['ngResource']);

appSeedServices.factory('dataElement', ['$http', '$q', function ($http, $q) {
        var dataElementMgr = {
            //var url ='https://dhis.cc.ac.mw/dhis/api/dataElements.json?fields=name,id';

            listAllMetadata: function (apiResource) {
                var url = getApiRoot()+'/api/'+apiResource+'.json?fields=name,id&paging=false' ;
                console.log("proflie metadata "+url);

                //promise to get all the metadata??
                var def = $q.defer();
                $http.get(url)
                    .success(function (res) {
                        def.resolve(res);
                    }).error(function (err, status) {
                    def.reject(err);
                });
                return def.promise;
            }
            ,
            specificMetadata: function (apiResource, id) {
              // https://dhis.cc.ac.mw/dhis/api/programs/QdI7Re8wlGT.json?fields=programStages[name]

                var url = getApiRoot()+'/api/'+apiResource+'/'+id+'.json?fields=name,:allpaging=false' ;
                console.log("proflie metadata "+url);
                var def = $q.defer();
                $http.get(url)
                    .success(function (res) {
                        def.resolve(res);
                    }).error(function (err, status) {
                    def.reject(err);
                });
                return def.promise;

            },
            //service getting a specific data element info
            dataElementsDetails: function (id) {
              var url = getApiRoot()+'/api/dataElements/'+id+'.json?fields=name,domainType,description,dataSets[name],dataElementGroups[name]';
              var def = $q.defer();
              $http.get(url)
                  .success(function (res) {
                      def.resolve(res);
                  }).error(function (err, status) {
                      def.reject(err);
                  });
              return def.promise;
            },

            dataElementGroupsDetails: function (id) {
              var url = getApiRoot()+'/api/dataElementGroups/'+id+'.json?fields=name,dataElementGroupSet[name],dataElements[name]';
              var def = $q.defer();
              $http.get(url)
                  .success(function (res) {
                      def.resolve(res);
                  }).error(function (err, status) {
                      def.reject(err);
                  });
              return def.promise;
            },

            indicatorsDetails: function (id) {
              var url = getApiRoot()+'/api/indicators/'+id+'.json?fields=name,description,denominatorDescription,numeratorDescription,indicatorGroups[name]';
              var def = $q.defer();
              $http.get(url)
                  .success(function (res) {
                      def.resolve(res);
                  }).error(function (err, status) {
                      def.reject(err);
                  });
              return def.promise;
            },
            indicatorGroupsDetails: function (id) {
              var url = getApiRoot()+'/api/indicatorGroups/'+id+'.json?fields=name,indicatorGroupSet[name],indicators[name]';
              var def = $q.defer();
              $http.get(url)
                  .success(function (res) {
                      def.resolve(res);
                  }).error(function (err, status) {
                      def.reject(err);
                  });
              return def.promise;
            },

            //fields=name,categoryCombo,dataElements[name],indicators[name],organisationUnits[name]
            dataSetsDetails: function (id) {
              var url = getApiRoot()+'/api/dataSets/'+id+'.json?fields=name,categoryCombo[name],dataElements[name],indicators[name],organisationUnits[name]';
              var def = $q.defer();
              $http.get(url)
                  .success(function (res) {
                      def.resolve(res);
                  }).error(function (err, status) {
                      def.reject(err);
                  });
              return def.promise;
            },
            programsDetails: function (id) {
              // https://dhis.cc.ac.mw/dhis/api/programs/QdI7Re8wlGT.json?fields=programStages[name]

                var url = getApiRoot()+'/api/programs/'+id+'.json?fields=organisationUnits[name,id],programTrackedEntityAttributes[name,id],programStages[name,id],userRoles[name,id],trackedEntity[name],';
                console.log("proflie metadata "+url);
                var def = $q.defer();
                $http.get(url)
                    .success(function (res) {
                        def.resolve(res);
                    }).error(function (err, status) {
                    def.reject(err);
                });
                return def.promise;

            },

            organisationUnitsDetails: function (id) {
              var url = getApiRoot()+'/api/organisationUnits/'+id+'.json?fields=programs[name],ancestors[name],organisationUnitGroups[name],dataSets[name]';
              var def = $q.defer();
              $http.get(url)
                  .success(function (res) {
                      def.resolve(res);
                  }).error(function (err, status) {
                      def.reject(err);
                  });
              return def.promise;
            },

            organisationUnitGroupsDetails: function (id) {
              var url = getApiRoot()+'/api/organisationUnitGroups/'+id+'.json?fields=organisationUnitGroupSet[name],organisationUnits[name]';
              var def = $q.defer();
              $http.get(url)
                  .success(function (res) {
                      def.resolve(res);
                  }).error(function (err, status) {
                      def.reject(err);
                  });
              return def.promise;
            },

            usersDetails: function (id) {
              var url = getApiRoot()+'/api/users/'+id+'.json?fields=organisationUnits[name],userGroups[name]';
              var def = $q.defer();
              $http.get(url)
                  .success(function (res) {
                      def.resolve(res);
                  }).error(function (err, status) {
                      def.reject(err);
                  });
              return def.promise;
            }
        };

        return dataElementMgr;
    }]);
