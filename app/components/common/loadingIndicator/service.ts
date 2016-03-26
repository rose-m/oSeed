import * as _ from "underscore";

export interface ILoader {
    load(message?:string);
    update(message:string, apply?);
    done(apply?);
}

export class LoadingIndicator {
    static SERVICE_NAME = 'LoadingIndicator';

    private loaders:Array<string> = [];
    private messages:{ [id:string]:string } = {};

    constructor(private $rootScope:ng.IRootScopeService) {
    }

    loading() {
        return this.loaders.length > 0;
    }

    message():string {
        return this.messages[this.loaders[0]];
    }

    getLoader():ILoader {
        const id = _.uniqueId('loader');
        return {
            load: (message:string = "Loading...") => {
                this.loaders.unshift(id);
                this.messages[id] = message;
            },
            update: (message:string, apply = false) => {
                this.messages[id] = message;
                if (apply) {
                    this.$rootScope.$apply();
                }
            },
            done: (apply = false) => {
                this.loaders = _.without(this.loaders, id);
                if (apply) {
                    this.$rootScope.$apply();
                }
            }
        };
    }
}
