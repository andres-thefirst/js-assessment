exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(
                   // The resolver function is called with the ability to resolve or
                   // reject the promise
                   function(resolve, reject) {
                        resolve(value)
                   });
  },

  manipulateRemoteData : function(url) {
     var dfd = $.Deferred();

         $.ajax(url).then(function(resp) {
           var people = $.map(resp.people, function(person) {
             return person.name;
           });
           dfd.resolve(people.sort());
         });

         return dfd.promise();
  }
};
