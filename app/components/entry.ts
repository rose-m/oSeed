import 'angular';
import 'angular-ui-router';
import * as _ from 'underscore';
import * as constants from "./constants";
import {STATES} from "./states";

angular.module(constants.APP, ['ui.router'])
    .config(($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
        _.each(STATES, (description) => {
            $stateProvider.state(description.name, description.config);
        });

        $urlRouterProvider.otherwise('/project');
    });
