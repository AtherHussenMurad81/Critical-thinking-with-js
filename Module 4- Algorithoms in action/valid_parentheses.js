// Problem Statement

import Stack from "./stack.js";

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false

// const stack = new Stack();
// console.log(stack);

const bracketChecker = (str) => {
  const stack = new Stack();

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // console.log(element);
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty()) {
        return false;
      }

      const expected = bracketMap[char];

      const got = stack.pop();

      console.log("got", got);
      console.log("expected", expected);
      if (got !== expected) {
        return false;
      }
    }
  }

  //   console.log(stack);
  return stack.isEmpty();
};
console.log(bracketChecker("[{}]"));
console.log("....................");
console.log(bracketChecker("[{}]"));
console.log("....................");
console.log(bracketChecker("[{}])"));
console.log("....................");
console.log(bracketChecker("[{}]"));
