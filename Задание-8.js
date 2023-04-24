  // Задание 8
let superMap = new Map();
superMap.set('feeling', 'love');
superMap.set('age', 26);
superMap.set(false, 2023);

for (let x of superMap.keys()){
  console.log(`Ключ - ` + x + `, значение - `+ superMap.get(x));
}
