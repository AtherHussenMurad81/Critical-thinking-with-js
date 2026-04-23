const numbers = [34, 3, 2, 43, 54, 3, 100, 120];

const fruits = ["apple", "Banana", "", "mango", "date"];
const tagsFromPosts = [
  ["javaScript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];
// some
const currentUserRoles = ["user", "aditor"];
const featureAccessRoles = ["admin", "manager"];

// ...................

// its make all numbers convert string like, abcdef
// console.log(numbers.sort());
const sortedNumbers = numbers.sort((a, b) => a - b); //asynging order or cuto teke boro.
const sortedNumbersToDes = numbers.sort((a, b) => b - a); //boro teke suto
// means
// console.log(sortedNumbersToDes);

//  string sorting............

// console.log(fruits.sort());
// string sorting e capital letter age ase

fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);
// overWrite capital small letter

// Flat array:- nested array convert the main array but i bange only one lare
// example :/
// const array = [1, 2, 3, [5, 6, 7]];
const arraylare2 = [12, 3, 4, [4, 23, 2, [54, 2]]];

// console.log(array.flat());

// console.log(arraylare2.flat(2));
// console.log(arraylare2.flat(Infinity));

// ..........

const filter = new Set(tagsFromPosts.flat());
const filterArray = [...new Set(tagsFromPosts.flat())];
// console.log(filter);
// console.log(filterArray);

