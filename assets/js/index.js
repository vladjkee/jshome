
// const MaxValue = prompt("enter number 1:");
// const MaxValue2 = prompt("enter number 2:");

// /**
//  * checks is MaxValue
//  * @param {*} val1 
//  * @param {*} val2 
//  */
//  const getMaxValue = function(val1, val2){
//    if(isNaN(val1 - val2)){
//     return false;
//    }
//    if (val1 > val2){
//      return val1;
//    }
//    return val2;
//  }
// console.log("Max value is: ", getMaxValue(MaxValue, MaxValue2));

// const MinValue = prompt("enter number 1:");
// const MinValue2 = prompt("enter number 2:");

// /**
//  * checks is MinValue
//  * @param {*} val1 
//  * @param {*} val2 
//  */

//  const getMinValue = function(val1, val2){
//    if(isNaN(val1 - val2)){
//     return false;
//    }
//    if (val1 < val2){
//      return val1;
//    }
//    return val2;
//  }
// console.log("Min value is: ",getMinValue(MinValue, MinValue2));
// /**
//  * checks if a number is Even
//  * @param {value*} val1 
//  * @param {*} val2 
//  */
// const Even = prompt("enter number is Even:");

//  const isEven = function(value){
//    if(isNaN(value)){
//      console.log("its' not a number");
//      return null;
//    }
//  return number % 2 === 0;
// } 
// console.log("is Even number: ", isEven(Even)); 


const userInput = +prompt("How this a day dude:");

switch(userInput){
case 1:
case 2:
case 3:
case 4:
case 5:
case 7:
case 8:
case 9:
case 10:{
    console.log("First decada");
    break;
  }
case 11:
case 12:
case 13:
case 14:
case 15:
case 17:
case 18:
case 19:
case 20:{
        console.log("second decada");
        break;
      }
case 21:
case 22:
case 23:
case 24:
case 25:
case 27:
case 28:
case 29:
case 30:
case 31:{
    console.log("Third decada");
    break;
  }
  default: {
    console.log("Wrong value, enter a day within from 1 to 31")
  }
}

 let num1 = +prompt("Enter number one: ");
 let num2 = +prompt("Enter number two: ");
 let operation = prompt("Enter operation (+, -, *, /):");


 console.log("Result: ",num1 + operation + num2 + "=", calculation(num1, num2, operation));

 function calculation(num1, num2, operation) {
  if(isNaN(num1 - num2)) {
    console.log("Invalid number");
    return false;
  }
  switch (operation){
    case "+": {
      return num1 + num2;
    }
    case "-": {
      return num1 - num2;
    }
    case "*": {
      return num1 * num2;
    }
    case "/": {
      return num1 / num2;
    }
    default:{
      console.log("wrong operation: ", operation)
      return null;
    }
  }
}

