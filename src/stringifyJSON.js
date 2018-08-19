// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var keyVals = []
  var valArr = []
  var keyArr = [];
    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null)
        return '' + obj;
    else if (typeof obj === 'string')
        return '"' + obj + '"';

    else if (Array.isArray(obj)) {
        if (obj.length == 0)
            return '[]';
        else {
            obj.forEach(function(el) {
                valArr.push(stringifyJSON(el));
            });
            return '[' + valArr + ']';
        }
    }
    else if (typeof obj == 'object') {
        keyArr = Object.keys(obj);
        keyArr.forEach(function(key) {
            var keyOut = '"' + key + '":';
            var keyValOut = obj[key];
            if (typeof keyValOut == 'function'|| typeof keyValOut === undefined)
                keyVals.push('');
            else if (typeof keyValOut === 'string')
                keyVals.push(keyOut + '"' + keyValOut + '"');
            else if (typeof keyValOut === 'boolean' || typeof keyValOut === 'number' || keyValOut === null)
                keyVals.push(keyOut + keyValOut);
            else if (typeof keyValOut == 'object') {
                keyVals.push(keyOut + stringifyJSON(keyValOut));
            }
        });
        return '{' + keyVals + '}';
    }
};
