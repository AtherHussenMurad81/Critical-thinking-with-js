// const obj = {
//   nextLevel: { courseId: "level2" },
//   "programming hero": {
//     courseId: "level1",
//   },
//   true: "Student",
// };
// console.log(obj.nextLevel);
// console.log(obj["programming hero"]);
// console.log(obj["nextLevel"]);
// console.log(obj["true"]); // its convert a string
//  ............

// const obj = {};

// obj.nextLevel = {
//   courseId: " level2",
// };
// obj[true] = {
//   courseId: "level1",
// };

// console.log(obj);
// limitation of object
// i cannot stay it key. I only stay it both string and symbol
//  if i overcome object limitation. I can use map

// const course1 = {
//   name: "at",
// };
// const course2 = {
//   name: " next",
// };

// const obj = {};
// console.log("[object Object]");
// obj.nextLevel = { courseId: "we" };
// obj[course2] = { courseId: "tr" };
// console.log(obj);

// ......... Map

// const course1 = {
//   name: "programming Hero",
// };
// const course2 = {
//   name: " next level web",
// };

// const map = new Map();

// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// console.log(map);
// map.clear();
// console.log("56", map);
// console.log(map.size);
// console.log(map.delete);
// console.log(map.has); //is it exist here and return true and false

// map.forEach((value, key) => console.log("key", key, "value", value));

//  OutPut

// key { name: 'programming Hero' } value { courseId: 'level1' }
// key { name: ' next level web' } value { courseId: 'level2' }

// map.forEach((value, key) =>
//   console.log("key", (key.name = "sohoj sorol " + key.name), "value", value),
// );

// const keys = map.keys();
// const value = map.values();
// console.log([...keys]); // return array of objects
// console.log([...value]); // also its return an object

// for (let key of keys) {
//   //   console.log(key);
//   key.name = "Learn both " + key.name;
// }
// console.log(map.entries());

const course1 = {
  name: "programming Hero",
};
const course2 = {
  name: " next level web",
};

const courses = [
  [course1, "level1"], // return object course 1

  ["nextLevel", "level2"],
];
const map = new Map(courses);

console.log(map);
