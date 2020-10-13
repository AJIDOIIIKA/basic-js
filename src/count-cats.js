const CustomError = require("../extensions/custom-error");

module.exports = function countCats(n) {
  
  let count = 0;
  let cat = "^^";
  
  for(let i = 0; i<n.length; i++){
    for(let j = 0; j<n[i].length; j++){
      if(n[i][j] === cat){
        count +=1;
      }
    }
  }
  return count;
};
