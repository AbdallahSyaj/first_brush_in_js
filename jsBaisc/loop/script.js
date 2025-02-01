"use strict"

//1
let ar = [[1,2,3] , [4,5,6], [7,8,9]];
for(let i=0 ; i<ar.length; i++){
for(let j=0 ; j<ar[i].length; j++){
    console.log(ar[i][j]);
}
}


// 2
let arr = [1,2,3,4,5,6];
for(let i = arr.length-1 ; i>=0; i--){
console.log(arr[i]);
}


//3
let arry = [1,3,2,4,3,5,4];
for(let i=0 ; i<arry.length; i+=2){
console.log(arry[i]);
}

//4
function findFrequency(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
      }
    }
    return count;
  }