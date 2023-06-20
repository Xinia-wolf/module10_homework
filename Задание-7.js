 /* Задание 7
 Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, 
 то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

  let arr = [0, 26, 35, 17, 22, 45, 16, 78, 817, 39, 110, 'd', null, 'e'];
  let countEven = 0;
  let countOdd = 0;
  let countOther = 0;
  
  for (let i = 0; i < arr.length; i++){
      if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
          countOther++;
      } else {
          if (arr[i] % 2 === 0) {
              countEven++;
          } else {
              countOdd++;
          }
      }
  }
  
  console.log("Even is " + countEven);
  console.log("Odd is " + countOdd);
  console.log("Other is " + countOther);

  // Вариант 2 
let elements = [26, 35, null, 'love', 42];

let sumEven = 0;
let sumOdd = 0;
let sumOther = 0;

for (i = 0; i < elements.length; i++) {
  if (Number.isFinite(elements[i])) {
    if (elements[i] % 2 === 0) {
      sumEven = sumEven + 1;
    } else {
      sumOdd = sumOdd + 1;
    };
  } else {
    sumOther = sumOther + 1;
  };
};

alert( sumEven );
alert( sumOdd );
alert( sumOther );