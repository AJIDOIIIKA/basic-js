const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  let array = arr.map(function(item, index,arr){
      if(item == '--double-next'){
      arr[index] = arr[index + 1]; 
      }
      else if (item == '--double-prev') {
          arr[index] = arr[index - 1]; 
      }
     else if (item == '--discard-next') {
          [arr[index + 1], arr[index]] = [undefined, undefined]; 
      }
     else if (item == '--discard-prev') {
          [arr[index + 1], arr[index]] = [undefined, undefined];
      }
    return arr;
      });
   ([...arr]).filter((element) => element !== undefined)
  
  
};
