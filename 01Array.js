/*Arrays -> collection of multiple values in one variable
example -> let data = [10, "Shristy", true, null];

const myArr = [0, 1, 2, 3, 4,]
const heroes = ["Salman", "James"]

another way of declaring arrays
const myArr2 = new Array(1, 2, 3, 40)

console.log(myArr[3]); //-> 3


arrays methods

myArr.push(6)
myArr.pop()
myArr.unshift(9)
console.log(myArr); -> [ 0, 1, 2, 3, 4, 6 ]

push is used to insert an element in the Array
pop is used to remove the last element

myArr.unshift(9)
console.log(myArr);  //->[9, 0, 1, 2, 3, 4, 6]

myArr.shift()
console.log(myArr);

shift() removes the first element from the array.
unshift() adds one or more elements at the beginning of an array.

console.log(myArr.includes(9)); // does array contains an element 9 (returns boolean values)
console.log(myArr.indexOf(3)); //returns the index of the element 3

const newArr = myArr.join()
console.log(myArr); -> [ 0, 1, 2, 3, 4, 6 ]
console.log(newArr);  -> 0,1,2,3,4,6

join() converts an array into a string.

Slice, Splice

console.log("A", myArr);  -> A [ 0, 1, 2, 3, 4, 6 ]

const myn1 = myArr.slice(1, 3) -> [ 1, 2 ]

console.log(myn1);
console.log("B ", myArr);  B  [ 0, 1, 2, 3, 4, 6 ]

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);  C [ 0, 4, 6 ]
console.log(myn2);    [ 1, 2, 3 ]  


slice () -> doesn't chnages the orginal array and returns the remove elements ...last index is not included
splice() changes the original array  
and returns the removed elements  (here the end index is included)*/
