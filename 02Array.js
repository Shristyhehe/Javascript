const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

/*marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); 

//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] output*/

//CONCAT
/*const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); 
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]*/


//spread
/*const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);
output ->[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//flat
const another_array = [1, 2, 3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// output 
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]

//Array.isArray()
/*console.log(Array.isArray("Shristy"));
output -> false

//Array.from()
console.log(Array.from("Shristy"));
output -> [
  'S', 'h', 'r',
  'i', 's', 't',
  'y'
]*/
