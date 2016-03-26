import {APP} from "../../constants";
const templateUrl = require('./checkedTool.ng.html');

function oseedCheckedTool():ng.IDirective {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: templateUrl,
        transclude: 'element',
        scope: {
            name: '@',
            version: '@',
        }
    }
}

APP.directive('oseedCheckedTool', oseedCheckedTool);
