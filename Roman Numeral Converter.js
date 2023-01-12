function convertToRoman(num) {
    const x = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
     var y = [];
     x.forEach(function(z) {
       while (num >= z[1]) {
         y.push(z[0]);
         num -= z[1];
       }
     });
     return y.join('');
   }
   
   convertToRoman(36);