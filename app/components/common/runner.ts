import {APP} from "../constants";
import "angular";
const stream = require('stream');
const child_process = require('child_process');

export class Runner {
    constructor(private $q:ng.IQService) {
    }

    runCommandAsync(cmd:string, ...args:Array<string>):ng.IPromise<string> {
        const deferred = this.$q.defer();

        let out = '';
        const cp = child_process.spawn(cmd, args);
        cp.stdout.on('data', (data:string) => {
            out += data;
        });
        cp.stderr.on('data', (data:string) => {
            out += data;
        });
        cp.on('close', (code:number) => {
            if (code !== 0) {
                deferred.reject(out)
            } else {
                deferred.resolve(out);
            }
        });

        return deferred.promise;
    }

    runCommand(cmd:string, ...args:Array<string>):{success:boolean, out:string} {
        try {
            const out = child_process.spawnSync(cmd, args);
            let success = true;
            if (out.error || out.status !== 0) {
                console.error(`Failed to run command: ${cmd}`);
                console.error(args, out.error, out.status);
                success = false;
            }
            const stdout = out.stdout ? out.stdout.toString() : null;
            return {
                success: success,
                out: !!stdout ? stdout : (out.stderr ? out.stderr.toString() : null)
            };
        } catch (e) {
            console.error(`Failed to run command: ${cmd}`);
            console.error(args, e);
            return {
                success: false,
                out: null
            };
        }
    }

}

APP.service('Runner', Runner);
