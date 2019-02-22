module.exports = function getZerosCount(number, base) {
  let counter = 0;
  let num = number;
  let resultArr = [];
  let simplesArr = simplesDivide(base);
  
  for(let key in simplesArr){
      while(num > 0){
          num = Math.floor(num/key);
          counter += num;
      }
      resultArr.push(Math.floor(counter/simplesArr[key]));
      num = number;
      counter = 0;
  }
  return resultArr.sort((a, b) => a - b)[0];
}
const simplesDivide = (numBase) =>{
  let result = {};
  let divider = 2;
  while(numBase !== 1){
      if(Math.sqrt(numBase) < divider) {
          result[numBase] = (result[numBase] > 0) ? result[numBase]+1 : 1;
          numBase = 1;
      }
      if(numBase%divider === 0){
          result[divider] = (result[divider] > 0) ? result[divider]+1 : 1;
          numBase /= divider;
          divider = 2;
          continue;
      }
      divider++;
  }
  return result;
}