import {LoadingIndicator} from "./service";
import {loadingDirective, LOADING_DIRECTIVE} from "./directive";
import "angular";

export const LOADING_MODULE = "app.loading";
angular.module(LOADING_MODULE, [])
    .service(LoadingIndicator.SERVICE_NAME, LoadingIndicator)
    .directive(LOADING_DIRECTIVE, loadingDirective);
