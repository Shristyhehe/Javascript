//let's talk about simple operations that we use in our day to day life

let value = 3
let negValue = -value 
console.log(negValue); // value will be in negative

//basic operations 
console.log(2+2); //4
console.log(2-2); //0
console.log(2*2); //4
console.log(2**3); //8 (** -> means power)
console.log(2/2); // 1
console.log(2%3); //2

//simply concating two strings
let str1 = "Shristy"
let str2 = " Chhetri"
let str3 = str1 + str2
console.log(str3); //Shristy Chhetri

//now we will talk about some complex conversionOperations
console.log(1 + "2"); //12 (the first value type will be treated as final output type)
console.log("1" + 2); //12 (first value is string so it will be string the no. will not add)
console.log(1 + 2 + "2"); //32 (first two value will be added and string will as same)
console.log("1" + 2 + 2); //122 (the first value was string so everything will be treated as string)


//let's take an example(prefix and postfix)

let game = 100
 game++;
 console.log(game); // 101

let game = 100
++game;
console.log(game); //101

