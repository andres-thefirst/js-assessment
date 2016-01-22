exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0],arr[1],arr[2]);
  },

  speak : function(fn, obj) {
        return fn.call(obj);
  },

  functionFunction : function(str) {
        function theFunction(str){
            return function(str1){
                return str + ", " + str1;
            }
        }

        return theFunction(str);
  },

  makeClosures : function(arr, fn) {
        var clousure = function (i){
            return function(){
                return fn(i);
            }
        };

        var result = [];

        arr.forEach( function(element){
            result.push(clousure(element));
        });

        return result;
  },

  partial : function(fn, str1, str2) {
    return function(arg){
        return fn(str1, str2, arg);
    }
  },

  useArguments : function() {
    result = 0;
    for(i = 0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
  },

  callIt : function(fn) {
    return fn.apply(null, Array.prototype.splice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {
        var args = Array.prototype.splice.call(arguments, 1);
        return function(){
            return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
        }
  },

  curryIt : function(fn) {
    var args = [];
    var c = 3;
    p = function(a) {
        args.push(a);
        if (--c==0){
           return fn.apply(null, args); //nothing to curry with - return function
        }
        return p
    }
    return p;
  }
};
