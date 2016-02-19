'use strict';
/*
 * Joystick Directive for AngularJS. 
 * A fork of Scott Lobdell's joystick initially for backbone (https://github.com/slobdell/joystick).
 */

angular.module('angular-joystick').directive('angularJoystick', function(JoystickService) {
    return {
        restrict: 'EA',
        scope: {
            coords: '=',
            onMove: '&'
        },
        template: '<div '+
            'ng-mousedown="joystick.startControl()" ' +
            'ng-mouseup="joystick.endControl()" ' +
            'ng-mousemove="joystick.move($event)" ' +
            //'hmPanstart"="joystick.startControl()" ' +
            //'hmPanmove"="joystick.move($event)" ' +
            //'hmPanend"="joystick.endCotrol()" ' +
            '><canvas id="joystickCanvas" ' +
                'width="{{joystick.squareSize}}" height="{{joystick.squareSize}}" style="width: {{joystick.squareSize}}px; height: {{joystick.squareSize}}px;"></canvas>'+
            '</div>',
        controller: ['$scope',
            function($scope) {
                $scope.joystick = JoystickService.get($scope.coords, $scope.onMove);
                $scope.$on('$destroy', function () {
                    $scope.joystick = {};
                });
            }
        ]
    };
});
