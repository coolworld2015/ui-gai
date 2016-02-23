(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'ui.bootstrap']);

    angular
        .module('app')
        .run(runHandler);

    runHandler.$inject = ['$rootScope', '$state'];

    function runHandler($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState) { //TODO Change $stateChangeStart
            var requireLogin = toState.data.requireLogin;
            if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();
                $state.go('login');
            }
        });
    }

    angular
        .module('app')
        .run(init);

    init.$inject = ['$rootScope'];

    function init($rootScope) {
        var mode;
        if ($rootScope.mode === undefined) {
            mode = localStorage.getItem('ui-gai.mode');
            mode = JSON.parse(mode);
            $rootScope.mode = mode;
        }

        if ($rootScope.mode === null) {
            mode = 'OFF-LINE (LocalStorage)';
            localStorage.setItem('ui-gai.mode', JSON.stringify(mode));
            $rootScope.mode = mode;
        }

        $rootScope.numPerPageItems = 10;

        $rootScope.myConfig = {
            webUrl: 'http://ui-gai.herokuapp.com/' //TODO Heroku MongoDB
            //webUrl: 'http://localhost:3000/' //TODO Local MongoDB
            //webUrl: 'http://localhost:3000/file/' //TODO Local JSON DB
        };

        //$rootScope.mode = 'OFF-LINE (LocalStorage)'; //TODO !!! ONLY for Google Market
        //$rootScope.mode = 'ON-LINE (Heroku)'; //TODO !!! ONLY for Web Site - change index.html (idly-user-logout) and $stateChangeStart
    }
})();