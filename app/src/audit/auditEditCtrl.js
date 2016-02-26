(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('AuditEditCtrl', AuditEditCtrl);

    AuditEditCtrl.$inject = ['$state', '$rootScope', '$timeout', '$stateParams'];

    function AuditEditCtrl($state, $rootScope, $timeout, $stateParams) {
        var vm = this;

        angular.extend(vm, {
            init: init,
            auditEditBack: auditEditBack,
			_errorHandler: errorHandler
        });

        angular.extend(vm, $stateParams.item);

        $timeout(function () {
            window.scrollTo(0, 0);
        });

        init();

        function init() {
            if ($stateParams.item.name == undefined) {
                $state.go('audit');
            }

            $rootScope.myError = false;
            $rootScope.loading = false;
        }

        function auditEditBack() {
            $rootScope.loading = true;
            $timeout(function () {
                $state.go('audit');
            }, 100);
        }
		
        function errorHandler() {
            $rootScope.loading = false;
            $rootScope.myError = true;
        }
    }
})();