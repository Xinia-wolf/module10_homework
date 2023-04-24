// Задание 5
let array = [26, 'love', undefined, null, -17];

console.log(array.length);

let result = array.map(function(item, index, array) {
  return item
});

console.log(result);
