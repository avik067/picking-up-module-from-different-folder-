let arr = require("../country/state/city/index");

let getFiNa = require("../utilities/utils/index");

let getPeopleInCity = (arr) => {
  return getFiNa(arr);
};

console.log(getPeopleInCity(arr));

module.exports = getPeopleInCity;
