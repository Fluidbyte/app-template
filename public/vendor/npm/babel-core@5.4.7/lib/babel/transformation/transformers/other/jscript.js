/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.FunctionExpression = FunctionExpression;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

var metadata = {
  optional: true
};

exports.metadata = metadata;

function FunctionExpression(node, print) {
  if (!node.id) return;
  node._ignoreUserWhitespace = true;

  return t.callExpression(t.functionExpression(null, [], t.blockStatement([t.toStatement(node), t.returnStatement(node.id)])), []);
}