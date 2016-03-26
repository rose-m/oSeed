import "angular";
import {LoadingIndicator} from "./service";
const templateUrl = require('./template.ng.html');

export const LOADING_DIRECTIVE = 'otreeLoading';

export function loadingDirective(LoadingIndicator:LoadingIndicator):ng.IDirective {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: templateUrl,
        link: (scope:any) => {
            scope.Loading = LoadingIndicator;
        }
    };
}
