let myStrin="this it a WONDERFUL day ahead cant wait to ENJOY it"

//transforming a string to a lower case

console.log(myStrin.toLowerCase())
console.log(myStrin.toUpperCase())


//splitting a string
//console.log(myStrin.split(' '))

//OR
let splittedStr = myStrin.split(" ");
console.log(splittedStr)

//accesing single character using the char method(at various indexes)
console.log(myStrin.charAt(26))
console.log(myStrin.charAt(25))


//accessing the index of an element using indexoff

console.log(myStrin.indexOf('a'))


//if you have a storage with many redundancies/repitition you can use the last index of method to check when the last element repeats itself
console.log(myStrin.lastIndexOf('W'))





let myStrin=  "this is a WONDERFUL day ahead what WOULD they do faith faith faith faith faith faith i am a web developer ,qqqq";


/* //transforming a string to lowercase
console.log(myStrin.length);//uotput length of a string 

console.log(myStrin.toLowerCase());//transforms to lowercase
console.log(myStrin.toUpperCase());//transfroms to uppercase

//splitting a string
//has a delimiter("") that denotes by how much space you want to split your string then it also transform the words into an array of word
console.log(myStrin.split(' '));
//accessing single characters using the char method(at various indexes)
console.log(myStrin.charAt(26));
console.log(myStrin.charAt(25)); */

//accessing the index of an element using the indexoff
console.log(myStrin.indexOf("faith")); /* >>10 */

//if you have a storage with many redundadancies /repetitions you can use the last indexof method to check when the last element repeats itself
console.log(myStrin.lastIndexOf("faith"));

//checking if an element is contained in the string (we use the includes method which returns a boolean )
console.log(myStrin.toUpperCase().includes("DEVELOPER"));//dropdown categories,selections
//slice
//has two parameters the startpoint of the slice and the endpoint of the slice 
console.log(myStrin.slice(10,20));
console.log(myStrin.slice(10));//if there is no end point we return the slice start and the rest of the string 
console.log(myStrin.slice(-10,20));






//replacing a part of a string
//checking if a string starts with a given string
//reversing a string