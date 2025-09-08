const arr = [[1, 'first'], [3, 'third']];

const map1 = new Map(arr);
console.log('map1', map1);

console.log('map1.size', map1.size);

map1.set(2,'second');
console.log('map1 :>> ', map1);

map1.delete(1);
console.log('map1 :>> ', map1);

console.log(map1.get(3));

console.log(map1.has(2));

console.log([...map1.keys()] );

console.log([...map1.values()]);


