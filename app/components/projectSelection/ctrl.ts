import electron = require("electron");
const remote = electron.remote;
const templateUrl = require('./template.ng.html');

class ProjectSelectionCtrl {
    test = 'TEST';

    constructor($scope:ng.IScope) {
    }

    selectFolder() {
        remote.dialog.showOpenDialog({
            title: 'Select Project Folder',
            properties: ['openDirectory']
        }, (result) => {
            alert('Jo buddy: ' + result);
        });
    }
}

export const State:ng.ui.IState = {
    url: '/project',
    templateUrl: templateUrl,
    controller: ProjectSelectionCtrl,
    controllerAs: 'selectionCtrl'
};
