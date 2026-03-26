//this is an old style(syntax) of concatating which nowadays we don't follow
/*const name = "Shristy"
const repoCount = 40

console.log(name +  repoCount + "Value"); // we can directly concate new string in double quotes here it is value

//modern way or more nice syntax

const name = "Shristy"

const repoCount = 40

console.log(`hello my name is ${name} and my value of repo is ${repoCount}`);

//` ` -> backticks(also called template literals) they allow you to write strings and insert the variable inside them

//now we will talk about the buit in functions(or methods) that is provided in the string with an example*/
 
const gameName = new String('Shristy')

/*console.log(gameName[0]); // now don't think string as an array it's type is object only
//answer of this is S (0th index pe kya hai)
console.log(gameName.length); //length of the string -> 8
console.log(gameName.toUpperCase()); // capital pe kr dega -> SHRISTY
console.log(gameName.__proto__); // prototype kya hai(object {})
console.log(gameName.charAt(2)); // at particular index pe kya hai (r)
console.log(gameName.indexOf('t')); // kaunse index pe hai(5) */


//let's take more example

const newString = gameName.substring(0, 4); //start and end index batana hota hai and end index inclde nhi hota hai and negative value nhi dete hai
console.log(newString); //shri

const another = gameName.slice(0, 4);
//slice -> used to cut a part of the string and give a new string
console.log(another); //shri

const trimString = "    Shristy     "
console.log(trimString.trim()); //shristy
//trim is used to remove extra spaces 
//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd()

const url = "https://shristy.com/shristy%5Chhetri"
 console.log(url.replace('%5', "-")); //replace kr dega %5 ko with - //"https://shristy.com/shristy-Chhetri"
 console.log(url.includes('Shristy')); //check krega if there is shristy or not //true
