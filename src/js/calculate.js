import {foo} from './module.js';
exports.add = function(a,b){
  foo();
  return parseInt(a) + parseInt(b);
}