import electron = require("electron");
import path = require("path");
const remote = electron.remote;
const templateUrl = require('./template.ng.html');

class ProjectSelectionCtrl {

    projectName:string;
    projectFolder:string;

    constructor($scope:ng.IScope) {
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

    }
}

export const State:ng.ui.IState = {
    url: '/project',
    templateUrl: templateUrl,
    controller: ProjectSelectionCtrl,
    controllerAs: 'selectionCtrl'
};
