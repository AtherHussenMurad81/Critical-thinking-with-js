// const binarySrarch = (array, target) => {
//   let low = 0;
//   let high = array.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((high + low) / 2);
//     const guess = array[mid];
//     if (guess === target) {
//       return mid;
//     } else if (guess > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return -1;
// };

const binarySearch = (array, target) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    console.log("low:", low, "high:", high);

    const mid = Math.floor((high + low) / 2);
    console.log("mid index:", mid);

    const guess = array[mid];
    console.log("guess value:", guess);

    if (guess === target) {
      console.log("✅ Found at index:", mid);
      return mid;
    } else if (guess > target) {
      console.log("⬅️ Going left");
      high = mid - 1;
    } else {
      console.log("➡️ Going right");
      low = mid + 1;
    }

    console.log("----------------------");
  }

  console.log("❌ Not found");
  return -1;
};
const arr = [1, 3, 5, 7, 9, 11, 13];
binarySearch(arr, 9);
