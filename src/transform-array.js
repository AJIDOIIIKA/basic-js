const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');



  if (Array.isArray(arr) === false) throw new Error('Ooops, smth went wrong...');

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          newArr.pop();
        }
        i;
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        i;
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1]);
        }
        i;
        break;
      default:
        newArr.push(arr[i]);
    };
  };
  return newArr  ;
};