const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
     stringMembers = members.map(function(item){
       if(typeof item == 'string') {
         let trim = item.trim();
         
         return trim[0].toUpperCase();
       }
     })
     return stringMembers.sort().join('');
  
};
