import * as _ from "underscore";
import {APP} from "./constants";
import {STATES, DEFAULT_URL} from "./states";
import "./common";

APP.config(($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
        _.each(STATES, (description) => {
            $stateProvider.state(description.name, description.config);
        });

        $urlRouterProvider.otherwise(DEFAULT_URL);
    })
    .run(() => {
        jQuery('body').on('click', '.btn', function () {
            jQuery(this).blur();
        })
    });
