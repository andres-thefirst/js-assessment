exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
        return (num >> bit-1) & 1;
  },

  base10: function(str) {
        return parseInt(str, 2);
  },

  convertToBinary: function(num) {
        var result = '';
        for( i =0; i<8; i++){
            result = (num & 1) + result;
            num = num >> 1;
        }
        return result;
  },

  multiply: function(a, b) {
       var dec = 1;

       while(b<1){
            dec *= 10;
            b *= 10;
       }

       return a * b / dec;
  }
};
