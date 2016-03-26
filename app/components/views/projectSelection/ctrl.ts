import {ILoader, LoadingIndicator} from "../../common/loadingIndicator/service";
import "angular";
import electron = require("electron");
import path = require("path");
const remote = electron.remote;
const templateUrl = require('./template.ng.html');

class ProjectSelectionCtrl {

    projectName:string;
    projectFolder:string;

    private loader:ILoader;

    constructor($scope:ng.IScope, LoadingIndicator:LoadingIndicator) {
        this.loader = LoadingIndicator.getLoader();
    }

    selectFolder() {
        const result = remote.dialog.showOpenDialog({
            title: 'Select Folder',
            properties: ['openDirectory']
        });
        if (result) {
            this.projectFolder = result[0];
            this.projectName = path.basename(result[0]);
        }
    }

    createProject() {
        this.loader.load();
    }
}

export const State:ng.ui.IState = {
    url: '/project',
    templateUrl: templateUrl,
    controller: ProjectSelectionCtrl,
    controllerAs: 'selectionCtrl'
};
