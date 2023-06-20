  /* Задание 8
  Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
  Используйте шаблонные строки.*/
  
let superMap = new Map();
superMap.set('feeling', 'love');
superMap.set('age', 26);
superMap.set(false, 2023);

for (let x of superMap.keys()){
  console.log(`Ключ - ` + x + `, значение - `+ superMap.get(x));
}

// Вариант 2
let map = new Map();

map.set("name", "John");
map.set("age", 30);
map.set("profession", "developer");

map.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
});
