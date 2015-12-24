/** @jsx hJSX */

import {Observable} from 'rx';
import Cycle from '@cycle/core';
import CycleDOM, {hJSX} from '@cycle/dom';

main();

function main() {
  const appElement = document.createElement('div');

  document.body.appendChild(appElement);

  Cycle.run(app, {
    DOM: CycleDOM.makeDOMDriver(appElement)
  });
}

function app(drivers) {
  return {
    DOM: Observable.interval(1000)
        .map((i) => <h1 className="test">{i + ' seconds elapsed'}</h1>)
  };
}
