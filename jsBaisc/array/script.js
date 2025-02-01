"use strict"

let x = Array.of(1,2,3,4);
console.log(x);

let c = [1,2,3,4];
let v = Array.isArray(c);
console.log(v);

const arr = [1, 2, 3, 4, 5];
for (let index in arr) {
  console.log(arr[index]);
}

const ar = [1, 2, 3, 4, 5];

for (let value of ar) {
  console.log(value);
}

const arrr = [1, 2, 3, 4, 5];
for (let i = 0; i < arrr.length; i++) {
  console.log(arrr[i]);
}
