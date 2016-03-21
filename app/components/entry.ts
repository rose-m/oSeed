import * as _ from "underscore";
import * as constants from "./constants";
import {STATES} from "./states";
import {LOADING_MODULE} from "./loadingIndicator/index";
import "./loadingIndicator";
import "angular";
import "angular-ui-router";

angular.module(constants.APP, ['ui.router', LOADING_MODULE])
    .config(($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
        _.each(STATES, (description) => {
            $stateProvider.state(description.name, description.config);
        });

        $urlRouterProvider.otherwise('/project');
    })
    .run(() => {
        jQuery('body').on('click', 'button', function () {
            jQuery(this).blur();
        })
    });
