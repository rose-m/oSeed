import {State as MainMenuState} from "./views/mainMenu/ctrl";
import {State as ProjectSelectionState} from "./views/projectSelection/ctrl";
import {State as CheckInstallState} from "./views/checkInstall/ctrl";

export const MAIN_MENU = 'mainMenu';
export const PROJECT_SELECTION = 'projectSelection';
export const CHECK_INSTALL = 'checkInstall';

export const DEFAULT_URL = <string> MainMenuState.url;

export const STATES:Array<{name:string, config:ng.ui.IState}> = [
    {
        name: MAIN_MENU,
        config: MainMenuState
    },
    {
        name: PROJECT_SELECTION,
        config: ProjectSelectionState
    },
    {
        name: CHECK_INSTALL,
        config: CheckInstallState
    }
];
