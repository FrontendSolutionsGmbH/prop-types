# ufp-types

runtime type checking

this module is a fork of:
https://github.com/facebook/prop-types

## Remark / History

The excellent react-prop-types provide runtime type checking functionality, that is useful 
for production as well. 

so:
__This module is NOT meant for react-prop-types replacement__

Runtime type checking is used in [https://www.npmjs.com/package/ufp-core](ufp-core) for configuration checks or 
dynamic user interface building, depending on the provided data and much more.

## Installation

```shell
npm install --save ufp-types
```

## Importing

```js
import UfpTypes from 'ufp-types'; // ES6
var UfpTypes = require('ufp-types'); // ES5 with npm
```


## Usage

PropTypes was originally exposed as part of the React core module, and is
commonly used with React components.Ufp Types aim to behave exactly the same
but to be used in production

```js
import UfpTypes from 'ufp-types';


export default {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: UfpTypes.array,
  optionalBool: UfpTypes.bool,
  optionalFunc: UfpTypes.func,
  optionalNumber: UfpTypes.number,
  optionalObject: UfpTypes.object,
  optionalString: UfpTypes.string,
  optionalSymbol: UfpTypes.symbol,

/*
    the react specific elements are removed
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: UfpTypes.node,

  // A React element.
  optionalElement: UfpTypes.element,
*/

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: UfpTypes.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: UfpTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: UfpTypes.oneOfType([
    UfpTypes.string,
    UfpTypes.number,
    UfpTypes.instanceOf(Message)
  ]),

  // An array of a certain type
  optionalArrayOf: UfpTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: UfpTypes.objectOf(PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: UfpTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: UfpTypes.func.isRequired,

  // A value of any data type
  requiredAny: UfpTypes.any.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```
    
## Ufp Types 

the original PropTypes are extended by the UFP team,

```js
import UfpTypes from 'ufp-types';


export default {

     // You can declare that a prop value matches a certain regular expression
      optionalValueMatch: PropTypes.regEx(/regex/),
      valueMatch: PropTypes.regEx(/regex/).isRequired
}

    
    
documentation follows

## Reference to *original* prop-types

this module is a fork of:
https://github.com/facebook/prop-types