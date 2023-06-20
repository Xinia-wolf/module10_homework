/* Задание 5
Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива.*/

let arr = [26, 'love', undefined, null, -17];

console.log(arr.length);

arr.forEach((item) => { console.log(item) });

// Вариант 2
let arr = [1, 2, 15];

alert( arr.length );

let result = arr.map(function(item, index, array) {
  return item;
})

alert( result );