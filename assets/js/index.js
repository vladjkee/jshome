

const text1 = prompt("enter number 1:");
const text2 = prompt("enter number 2:");


 const getMaxValue = function(val1, val2){
   if(isNaN(val1 - val2)){
    return false;
   }
   if (val1 > val2){
     return val1;
   }
   return val2;
 }
console.log("Max value is: ", getMaxValue(text1, text2));

const text3 = prompt("enter number 1:");
const text4 = prompt("enter number 2:");


 const getMinValue = function(val1, val2){
   if(isNaN(val1 - val2)){
    return false;
   }
   if (val1 < val2){
     return val1;
   }
   return val2;
 }
console.log("Min value is: ",getMinValue(text3, text4));

const text5 = prompt("enter number is Even:");

 const isEven = function(number){
 return number % 2 === 0;
} 
console.log("is Even number: ",isEven(text5));