Simple Node application template for easily starting new projects.

## Setup

Running `npm install` will handle all dependency installation, no other action 
is neccesary.

## Configuration

The application uses a (default) `/config.js` file for maintaining configuration 
object. This configuration is loaded into the `lib/config.js` for access.

The default config is built to be easily overwritten with environment variables, 
for example, with the following config:

```javascript
var config = {
  foo: 'bar',
  baz: {
    quz: 'fiz'
  }
};
```

Setting the environment variable `BAZ_QUZ=buzz` would chang the `config.baz.quz` 
property to `buzz` at runtime.

Additionally a `prefix` property can be specified in the config:

```javascript
var config = {
  prefix: 'myapp',
  foo: 'bar',
  baz: {
    quz: 'fiz'
  }
};
```

In the above case environment variables like `MYAPP_BAZ_QUZ=buzz` would change the 
`config.baz.quz` property to `buzz`

## Tests

Unit tests are setup using [Mocha](http://mochajs.org/) with the [Chai Assertion 
Library](http://chaijs.com/).

Running tests are the standard `npm run test` which also includes linting. It 
can also be run independent of other tasks via `npm run mocha`.

## Static Analysis

### Linting

Static analysis testing is done with [JSCS](https://github.com/jscs-dev/node-jscs) 
and will run along with the tests (`npm run test`). It can also be run independetly
with the `npm run lint` command. It includes the `--fix` command which will attempt 
to fix linting errors as well.

Configuration is in the `.jscsrc` file. The default preset is `crockford` with 
several exceptions but can be easily changed as desired.

### Analysis

Additionally [Plato Code Analyzer](https://www.npmjs.com/package/plato) is setup 
to build reports for code analysis. It can be run via the command `npm run plato`.

## Documentation

Documentation is setup with [JSDoc](http://usejsdoc.org/) v.3 and the `jsdoc` 
node module is in dev dependencies.

Compiling JSDoc can be done with `npm run doc`.

## License

All code is released under the MIT License and is free to use, modify and 
redistribute per the terms of that license.