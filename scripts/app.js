'use strict';

/* App Module */

var appSeed = angular.module('appSeed',
        ['ui.bootstrap',
            'ngRoute',
            'ngCookies',
            'ngSanitize',
            'appSeedDirectives',
            'appSeedControllers',
            'appSeedServices',
            'appSeedFilters',
            'd2Services',
            'd2Controllers',
            'pascalprecht.translate',
            'd2HeaderBar',
            //pagination
            'angularUtils.directives.dirPagination'
        ])

        .value('DHIS2URL', '../' + dhis2.settings.baseUrl)

        .config(function ($translateProvider, $routeProvider) {

            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            }).when('/dataElements', {
                templateUrl: 'views/metadata-list.html',
                controller: 'dataElementsController'
            }).when('/dataElements/:id', {
                templateUrl: 'views/data-elements-details.html',
                controller: 'dataElementsController'
            }).when('/dataElementGroups/:id', {
                templateUrl: 'views/data-element-groups.html',
                controller: 'dataElementsController'
            }).when('/indicators', {
                templateUrl: 'views/metadata-list.html',
                controller: 'indicatorsController'
            }).when('/indicators/:id', {
                templateUrl: 'views/indicators-details.html',
                controller: 'indicatorsController'
            }).when('/indicatorGroups/:id', {
                templateUrl: 'views/indicator-groups-details.html',
                controller: 'indicatorsController'
            }).when('/dataSets', {
                templateUrl: 'views/metadata-list.html',
                controller: 'DataSetsController'
            }).when('/dataSets/:id', {
                templateUrl: 'views/data-set-details.html',
                controller: 'DataSetsController'
            }).when('/programs', {
                templateUrl: 'views/metadata-list.html',
                controller: 'programsController'
            }).when('/programs/:id', {
                templateUrl: 'views/program-utils.html',
                controller: 'programsController'
            }).when('/organisationUnits', {
                templateUrl: 'views/metadata-list.html',
                controller: 'organisationUnitsController'
            }).when('/organisationUnits/:id', {
                templateUrl: 'views/organisation-unit-details.html',
                controller: 'organisationUnitsController'
            }).when('/organisationUnitGroups/:id', {
                templateUrl: 'views/organisation-unit-group-details.html',
                controller: 'organisationUnitsController'
            }).when('/users', {
                templateUrl: 'views/metadata-list.html',
                controller: 'usersController'
            }).when('/users/:id', {
                templateUrl: 'views/users-details.html',
                controller: 'usersController'
            }).otherwise({
                redirectTo: '/'
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy('escaped');
            $translateProvider.useLoader('i18nLoader');
        });
