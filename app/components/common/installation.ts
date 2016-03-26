import {APP} from "../constants";
import {Runner} from "./runner";
import "angular";

export class Installation {

    private _pythonVersion:string;
    private _pipVersion:string;
    private _otreeVersion:string;

    constructor(private Runner:Runner) {
        this.getVersions();
    }

    isValid() {
        return !!this._pythonVersion && !!this._pipVersion && !!this._otreeVersion;
    }

    get pythonVersion():string {
        return this._pythonVersion;
    }

    get pipVersion():string {
        return this._pipVersion;
    }

    get otreeVersion():string {
        return this._otreeVersion;
    }

    private getVersions() {
        let result = this.Runner.runCommand('python', '--version');
        this._pythonVersion = result.success ? result.out : null;
        result = this.Runner.runCommand('pip', '--version');
        this._pipVersion = result.success ? result.out : null;
        result = this.Runner.runCommand('otree', '--version');
        this._otreeVersion = result.success ? result.out : null;
    }

}

APP.service('Installation', Installation);
