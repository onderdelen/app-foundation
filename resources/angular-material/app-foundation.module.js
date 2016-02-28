/**
 * app-foundation.module.js
 * Created by anonymous on 13/12/15 11:09.
 */

(function() {
    'use strict';

    angular
        .module('appFoundation', [
            /* Angularjs */
            'ngMaterial',
            'ngMessages',
            'ngSanitize',

            /* 3rd-party */
            'ui.router',
            'satellizer',
            'restangular',
            'ngStorage',
            'angular-loading-bar',
            'ngMdIcons',
            'md.data.table',
            'partialsModule',
            'pascalprecht.translate',
            'btford.markdown',

            /* Intra-services */
            'inServices.exception',
            'inServices.logger',
            'inServices.routes',
            'seneschal',
            'quetzalcoatl'
        ]);

    angular.module('widgets', []);

    angular.module('inServices.exception', []);
    angular.module('inServices.logger', []);
    angular.module('inServices.routes', []);

})();