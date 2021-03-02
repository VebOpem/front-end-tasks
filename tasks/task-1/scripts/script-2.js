const array = [2, 5, 9, 3, 4, 7, 1];
console.log(array);

//remove "5"
const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

console.log(array); 