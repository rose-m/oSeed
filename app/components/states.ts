import {State as ProjectSelectionState} from "./projectSelection/ctrl";
export const PROJECT_SELECTION = 'projectSelection';

export const STATES:Array<{name:string, config:ng.ui.IState}> = [
    {
        name: PROJECT_SELECTION,
        config: ProjectSelectionState
    }
];
