/* Задание 6
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

function checkArrayType(arr) {
    let arr1 = arr.map(e=>typeof e);
    return [...new Set(arr1)].length === 1;
  }
  
  function checkArrayType1(arr) {
    return arr.every((e,i,a) => typeof e === typeof a[0]);  
  }
  
  console.log(checkArrayType([3,6,7,'3']));
  console.log(checkArrayType1([3,6,7,3]));
