# Preact Fullscreen

[![npm version](https://badge.fury.io/js/preact-fullscreen.svg)](https://www.npmjs.com/package/preact-fullscreen) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/preact-fullscreen/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/preact-fullscreen.svg?branch=master)](https://travis-ci.com/andrelmlins/preact-fullscreen) &bull; [![Dependencies](https://david-dm.org/andrelmlins/preact-fullscreen.svg)](https://david-dm.org/andrelmlins/preact-fullscreen)

Component that performs fullscreen in DOM Elements

## Installation

```
npm i preact-fullscreen
// OR
yarn add preact-fullscreen
```

## Demo

Local demo:

```
git clone https://github.com/andrelmlins/preact-fullscreen.git
cd preact-fullscreen
yarn install && yarn start
```

## Examples

```jsx
import { h, render } from "preact";
import PreactFullscreeen from "preact-fullscreen";

const App = () => (
  <PreactFullscreeen>
    {({ ref, onRequest, onExit }) => (
      <div
        ref={ref}
        style={{ backgroundColor: "red", width: 120, height: 120 }}
      >
        <button onClick={() => onRequest()}>FullScreen</button>
        <button onClick={() => onExit()}>Screen</button>
      </div>
    )}
  </PreactFullscreeen>
);

render(<App />, document.body);
```

## Properties

| Prop     | Type | Description    |
| -------- | ---- | -------------- |
| onChange | func | Call in change |
| onError  | func | Call in error  |

### Children Function Properties

| Prop      | Type   | Description                |
| --------- | ------ | -------------------------- |
| ref       | object | Ref dom element            |
| onToggle  | func   | Call for fullscreen toggle |
| onExit    | func   | Call for fullscreen exit   |
| onRequest | func   | Call for fullscreen enter  |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/preact-fullscreen.png)](https://nodei.co/npm/preact-fullscreen/)

## License

Preact Fullscreen is open source software [licensed as MIT](https://github.com/andrelmlins/preact-fullscreen/blob/master/LICENSE).
