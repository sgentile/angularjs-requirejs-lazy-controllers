/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 14.11.12
 * Time: 18:58
 */

'use strict';

require.config({
    baseUrl:'js',
    paths:{
        text:'../lib/require/text',
        jquery:'../lib/jquery/jquery',
        angular: '../lib/angular/angular',
        angularbootstrap: '../lib/angular/angular-bootstrap'
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        angularbootstrap: {
            deps: ['angular']
        }
    },
    priority:[
        'angular'
    ],
    urlArgs:'v=1.1'
});

require([
    'angular',
    'text',
    'jquery',
    'app',
    'routes',
    'angularbootstrap'
], function (angular, angularbootstrap) {
    //This function will be called when all the dependencies
    //listed above are loaded. Note that this function could
    //be called before the page is loaded.
    //This callback is optional.

    $(document).ready(function () {
        angular.bootstrap(document, ['myApp', 'ui.bootstrap.dialog']);
    });
});