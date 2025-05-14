const myArr = [7, 1, 4, 9, 8, 2, 5];

function getKeyByValue(map: Map<number, number>, searchValue: number) {
  for (const [key, value] of map.entries()) {
    if (value === searchValue) {
      return key;
    }
  }
  return null; // or undefined
}

const myMap = new Map<number, number>();

console.log(myMap);

console.log(getKeyByValue(myMap, 7));

for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr.length - 1; j++) {
    if (myArr[j] < myArr[j + 1]) {
      const temp = myArr[j + 1];
      myArr[j + 1] = myArr[j];
      myArr[j] = temp;
    }
  }
}

//console.log(myArr);

function bubbleSortReverse(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSortReverse(myArr));
for (let i = 0; i < myArr.length; i++) {
  myMap.set(i, myArr[i]);
}

for (let i = 0; i < myArr.length; i++) {
  console.log(getKeyByValue(myMap, myArr[i]));
}

while (true) {
  coole.log("Hello");
}
