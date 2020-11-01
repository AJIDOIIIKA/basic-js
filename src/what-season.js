const CustomError = require("../extensions/custom-error");



module.exports = function getSeason(date) {
  if (date === undefined){
    return 'Unable to determine the time of year!';
  }
  if (date instanceof Date && typeof date.getUTCFullYear() == "number") {
    let seasonNumber = date.getMonth();
  } else {
    throw `Error`;
  }
  
  const season = date.getMonth()

  if(season < 2 || season >= 11) {
      return 'winter';
    }else if(season < 5) {
      return 'spring';
    }else if(season < 8) {
      return 'summer';
    }else if(season < 11) {
      return'autumn';
    }

 

  
};
