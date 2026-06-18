/*singelton --> when we create object thru constructor 
syntax = Object.create



//datatype -> symbol (example)
const mySym = Symbol(key1)

//object literals jab hum normally create krte hai objects ko
const JsUser = {
  name : "Shristy",
  "full name" : "ShristyChhetri",
  age : 18,
  [mySym] = "key1"
  location : "Checkpost",
  email : "Shristy@google.com",
  isLoggedIn : False,
  lastLoggedDays :  ["Monday", "wednesday"]
}

// how to access objects
console.log(JsUser.email);
or u can access it like 
console.log(JsUser["email"]); //because email string tha toh double quotes
console.log(JsUser[mySym]) //to print the symbol

//suppose if u wanna change your email so
JsUser.email = "Shristy@90gmail.com"

// if u don't want any other person to modify your object use Object.freeze
Object.freeze(JsUser)

//you can add function in ur object

JsUser.greetings = function(){
  console.log("Hello js user") 
}

JsUser.greetingsTwo = function(){
  console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greetings()); //hello js user
console.log(JsUser.greetingsTwo()); //hello js user Shristy */
