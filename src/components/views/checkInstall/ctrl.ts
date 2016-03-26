import {Installation} from "../../common/installation";
import {Runner} from "../../common/runner";
import {LoadingIndicator} from "../../common/loadingIndicator/service";
const child_process = require('child_process');
const fs = require('fs');
const tmp = require('tmp');
const remote = require('electron').remote;
const templateUrl = require('./template.ng.html');
require('./directives');

tmp.setGracefulCleanup();
const PIP_INSTALL_SCRIPT_URL = 'https://bootstrap.pypa.io/get-pip.py';

class CheckInstallCtrl {
    constructor(public Installation:Installation, private Runner:Runner, private LoadingIndicator:LoadingIndicator,
                private $http:ng.IHttpService, private $state:ng.ui.IStateService) {
    }

    installPip() {
        if (!this.Installation.pythonVersion || !!this.Installation.pipVersion) {
            return;
        }

        const loader = this.LoadingIndicator.getLoader();
        loader.load('Installing PIP...');

        this.$http
            .get(PIP_INSTALL_SCRIPT_URL)
            .then((res) => {
                loader.update('Saving installer...');
                tmp.file((err, path, fd, cleanupCallback) => {
                    if (err) {
                        console.error(err);
                        installFailed();
                        return;
                    }

                    fs.write(fd, res.data, 0, 'utf8', (err) => {
                        if (err) {
                            console.error(err);
                            installFailed();
                            return;
                        }

                        console.log(`written to: ${path}`);
                        loader.update('Running installer...', true);

                        this.Runner.runCommandAsync('python', path)
                            .then((out) => {
                                console.log(out);
                                remote.dialog.showMessageBox({
                                    type: 'info',
                                    title: 'Installation successful',
                                    message: 'PIP was successfully installed.',
                                    buttons: ['OK']
                                });
                            }, (out) => {
                                console.error('Failed...', out);
                                installFailed();
                            })
                            .finally(() => {
                                loader.done();
                                cleanupCallback();
                                this.$state.reload();
                            });
                    });
                });
            }, (res) => {
                console.error(res.status, res.data);
                installFailed();
                loader.done();
            });

        function installFailed() {
            remote.dialog.showMessageBox({
                type: 'error',
                title: 'Installation failed',
                message: 'Failed to install PIP',
                detail: 'Please refer to https://pip.pypa.io for a detailed installation guide.',
                buttons: ['OK']
            });
        }
    }

    installOtree() {
        if (!this.Installation.pythonVersion || !this.Installation.pipVersion || !!this.Installation.otreeVersion) {
            return;
        }

        const loader = this.LoadingIndicator.getLoader();
        loader.load('Installing oTree...');

        const out = this.Runner.runCommand('pip', 'install', 'otree');
        if (out === null) {
            console.error('Failed...');
        } else {
            console.log(out);
        }
        this.$state.reload();
    }
}

export const State:ng.ui.IState = {
    url: '/checkInstall',
    templateUrl: templateUrl,
    controller: CheckInstallCtrl,
    controllerAs: 'checkCtrl'
};
