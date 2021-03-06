/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.ForOfStatement = ForOfStatement;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _es6ForOf = require("../es6/for-of");

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

var metadata = {
  optional: true
};

exports.metadata = metadata;

function ForOfStatement(node, parent, scope, file) {
  if (this.get("right").isTypeGeneric("Array")) {
    return _es6ForOf._ForOfStatementArray.call(this, node, scope, file);
  }
}