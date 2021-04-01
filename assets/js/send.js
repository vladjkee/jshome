// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// var arr = [4, -2, 5, 19, -130, 0, 10];
// var max = Math.max.apply(null, arr);
// var min = Math.min.apply(null, arr);
// console.log(max); 
// console.log(min); 




// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79
// var arr = [12, 15, 20, 25, 59, 79];
// var sum = 0;
// for( var i = 0; i < arr.length; i++){
//   sum += arr[i];
// }
// var result = sum / arr.length;
// console.log(result);


// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
  
// let arrOne = [1, 2, 3];
// let arrTwo = arrOne.concat(4, 5, 6);
// console.log(arrTwo);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]

// const array = [1, 2, 3];
// const reversed = array.reverse();
// console.log('array: ', reversed);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6

// let number = [1, 2, 3];
// let total = number.push(4, 5, 6)
// console.log(number);



// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let number1 = [1, 2, 3];
// number1.unshift(4, 5, 6)
// console.log(number1);


// 5.Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

// let arr = ['js', 'css', 'jq'];
// console.log(arr);
// let shifted = arr.shift();
// console.log(arr);


// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq'];
// console.log(arr);
// let popped = arr.pop();
// console.log(popped);


// 7.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arrOne = [1, 2, 3, 4, 5];
// let arrTwo = arrOne.slice(0, -2 )
// console.log(arrTwo)

// 8.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let arrThree = [1, 2, 3, 4, 5];
// let arrFour = arrThree.slice(-2,)
// console.log(arrFour)

// 9.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// let removed = arr.splice(1,2);
// console.log(arr);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

  // let arr = [1, 2, 3, 4, 5];
  // let removed = arr.splice(0,1)
  // let popped = arr.pop()
  //  console.log(arr);


// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let removed= arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let removed= arr.splice(1, 5, 'a', 'b', 2, 3, 4, 'c', 5, 'e')
// console.log(arr);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// var arr = [3, 4, 1, 2, 7];
// arr.sort();
// console.log(arr.sort());

// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей
// var an_obj = {js:'test', jq: 'hello', css: 'world'};
// console.log(Object.keys(an_obj));