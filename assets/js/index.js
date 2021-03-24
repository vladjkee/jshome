
const MaxValue = prompt("enter number 1:");
const MaxValue2 = prompt("enter number 2:");

/**
 * checks is MaxValue
 * @param {*} val1 
 * @param {*} val2 
 */
 const getMaxValue = function(val1, val2){
   if(isNaN(val1 - val2)){
    return false;
   }
   if (val1 > val2){
     return val1;
   }
   return val2;
 }
console.log("Max value is: ", getMaxValue(MaxValue, MaxValue2));

const MinValue = prompt("enter number 1:");
const MinValue2 = prompt("enter number 2:");

/**
 * checks is MinValue
 * @param {*} val1 
 * @param {*} val2 
 */

 const getMinValue = function(val1, val2){
   if(isNaN(val1 - val2)){
    return false;
   }
   if (val1 < val2){
     return val1;
   }
   return val2;
 }
console.log("Min value is: ",getMinValue(MinValue, MinValue2));
/**
 * checks if a number is Even
 * @param {value*} val1 
 * @param {*} val2 
 */
const Even = prompt("enter number is Even:");

 const isEven = function(value){
   if(isNaN(value)){
     console.log("its' not a number");
     return null;
   }
 return number % 2 === 0;
} 
console.log("is Even number: ",isEven(Even));