exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
        var timeOut;

        function work(){
            console.log(start++);
            if(start <= end){
                timeOut = setTimeout(work, 100);
            }
        }

        work();

    return {
        cancel: function(){
            clearTimeout(timeOut);
        }
    }
  }
};
