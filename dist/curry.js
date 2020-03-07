"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function curry(fun) {
  var countArguments = fun.length;
  var concatArguments = [];

  var checkArgument = function checkArgument() {
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    concatArguments = [].concat(_toConsumableArray(concatArguments), rest);

    if (concatArguments.length >= countArguments) {
      return fun.apply(void 0, _toConsumableArray(concatArguments));
    } else {
      return checkArgument;
    }
  };

  return checkArgument;
}