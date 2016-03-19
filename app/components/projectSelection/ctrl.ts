const TEMPLATE_URL = require('./template.ng.html');

export const State:ng.ui.IState = {
    url: '/project',
    templateUrl: TEMPLATE_URL,
    controller: ProjectSelectionCtrl,
    controllerAs: 'selectionCtrl'
};

class ProjectSelectionCtrl {
    constructor($scope:ng.IScope) {
        (<any>$scope).test = 'HELLO';
    }
}
