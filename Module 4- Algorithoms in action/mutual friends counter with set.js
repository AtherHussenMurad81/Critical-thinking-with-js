//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //

// console.log(usersA, usersB);

// smy besi lagbe

// const commonFriendsSlow = (usersA, usersB) => {
//   const start = performance.now();
//   const commonFriends = [];

//   usersA.forEach((userA) => {
//     usersB.forEach((userB) => {
//       if (userA.id === userB.id) {
//         commonFriends.push(userB);
//       }
//     });
//   });

//   const end = performance.now();
//   return { count: commonFriends.length, time: end - start };
// };

// console.log(commonFriendsSlow(usersA, usersB));

// nested forEach marar jonno 8/9 scond smy nise

// ./..............

const commonFriendsFast = (usersA, usersB) => {
  const commonFriends = [];
  const start = performance.now();
  const idList = new Set(usersA.map((user) => user.id));
  //   console.log("55 lines", idList);

  usersB.forEach((userB) => {
    if (idList.has(userB.id)) {
      commonFriends.push(userB);
    }
  });
  const end = performance.now();
  return { count: commonFriends.length, time: end - start };
};
console.log(commonFriendsFast(usersA, usersB));
