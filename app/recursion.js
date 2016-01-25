exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = [];
    for(var p in data.files){
        //Check if it's an object (subDir)
        if( typeof(data.files[p]) == 'object'){
            //Call the same function passing the subdir and the result is concated to the the current list.
            //If it requires an specific dirName it is passed as a parameter.
            result = result.concat(this.listFiles(data.files[p],(dirName!==undefined && dirName === data.dir)? data.files[p].dirName: dirName ));
        }else{
            //Check if the list requires an specific dir.
            if(dirName != undefined){
                if(dirName===data.dir)
                    result.push(data.files[p]);
            }
            else{
                result.push(data.files[p]);
            }
        }

    }
    return result;
  },

  permute: function(arr) {
    if(arr.length==2){
        return [arr.[0], arr.[1]];
    }
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
