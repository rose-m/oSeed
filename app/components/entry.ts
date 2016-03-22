import * as _ from "underscore";
import {APP} from "./constants";
import {STATES} from "./states";
import "./loadingIndicator";

APP.config(($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
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
