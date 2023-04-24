 // Задание 7
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
