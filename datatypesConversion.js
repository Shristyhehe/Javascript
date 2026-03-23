//how conversion is done or how conversion works
//first example
let score = 33
let numberValue = Number(score) // if we know that our value is number then we can directly declare using Number
console.log(typeof score); //number
console.log(numberValue); // 33

// another example

 let score = "33abc"
 console.log(typeof score); // it will show string

 let score = true
 console.log(typeof score); // boolean

 let score = null
 console.log(typeof score); // it will give output as object

 let score = undefined
 console.log(typeof score); // it will give output as undefined

 // example from number to boolean
  let loggedIn = 1
  let booleanValue = Boolean(loggedIn)
  console.log(booleanValue); // output true

  let loggedIn = 0
  let booleanValue = Boolean(loggedIn)
  console.log(booleanValue); // output false

    let loggedIn = "" //empty string
    let booleanValue = Boolean(loggedIn)
  console.log(booleanValue); // false
    

    let loggedIn = "Shristy" // string
    let booleanValue = Boolean(loggedIn)
  console.log(booleanValue); // true 

  //number to string
  let num = 33
  let stringValue = String(num)
  console.log(stringValue); // output will be same like 33 but when you find its type it will be string
