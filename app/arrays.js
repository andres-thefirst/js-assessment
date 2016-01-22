exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, cur) {
               return prev + cur;
           })
  },

  remove : function(arr, item) {
    return arr.filter(function(value){
        return value !== item
    })
  },

  removeWithoutCopy : function(arr, item) {
    while( (index = arr.indexOf(item)) > -1){
        arr.splice(index, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.splice(arr.length, 0, item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
     arr.splice(0,0,item);
     return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0,item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(value){
        return value === item;
    }).length;
  },

  duplicates : function(arr) {
            sorted_arr = arr.sort();
            result = [];
            while(sorted_arr.length > 0){
                if((index = sorted_arr.lastIndexOf(sorted_arr[0])) !== 0){
                    result.push(sorted_arr[0]);
                    sorted_arr.splice(0,index+1);
                }
                else
                    sorted_arr.splice(0,1);
            }
            return result;
  },

  square : function(arr) {
        return arr.map(function(value){
            return value * value;
        })
  },

  findAllOccurrences : function(arr, target) {
       result = []
       index = -1
       while( (index = arr.indexOf(target,index+1)) > -1){
            result.push(index)
        }
        return result;
  }
};
