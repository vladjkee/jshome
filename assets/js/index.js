
const MaxValue = prompt("enter number 1:");
const MaxValue2 = prompt("enter number 2:");


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

const Even = prompt("enter number is Even:");

 const isEven = function(number){
 return number % 2 === 0;
} 
console.log("is Even number: ",isEven(Even));