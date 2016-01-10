import 'angular';
import * as constants from "./constants";

angular.module(constants.APP, [])
    .run(() => {
        const h1 = document.createElement('h1');
        h1.innerText = 'Hello World';
        document.querySelector('body').appendChild(h1);
    });
