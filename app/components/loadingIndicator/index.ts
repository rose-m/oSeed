import {LoadingIndicator} from "./service";
import {loadingDirective, LOADING_DIRECTIVE} from "./directive";
import {APP} from "../constants";
import "angular";

APP.service(LoadingIndicator.SERVICE_NAME, LoadingIndicator)
    .directive(LOADING_DIRECTIVE, loadingDirective);
