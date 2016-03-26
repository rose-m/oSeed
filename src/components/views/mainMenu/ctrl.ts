import {PROJECT_SELECTION, CHECK_INSTALL} from "../../states";
const templateUrl = require('./template.ng.html');

class MainMenuCtrl {
    constructor(private $state:ng.ui.IStateService) {
    }

    checkInstall() {
        this.$state.go(CHECK_INSTALL);
    }

    newProject() {
        this.$state.go(PROJECT_SELECTION);
    }
}

export const State:ng.ui.IState = {
    url: '/main',
    templateUrl: templateUrl,
    controller: MainMenuCtrl,
    controllerAs: 'menuCtrl'
};
