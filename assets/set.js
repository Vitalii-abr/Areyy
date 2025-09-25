const s = new Set ([1, 2, 3]);
console.log(s.has(3));
console.log(s.has(4));

s.add(5).add(6).add(7);

for (const value of s) {
    
};

let sum = 0;
for (let value of s) {
    sum += value;
}

s.delete(2);

let arr1 = [1,9,6,4,9,1,5,6];
let uniqueArr1 = [...new Set(arr1)];