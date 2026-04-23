# What's Look Up table

JavaScript-এ **Lookup Table (লুকআপ টেবিল)** বলতে বোঝায় এমন একটা ডাটা স্ট্রাকচার (সাধারণত Object বা Array), যেটা ব্যবহার করে তুমি দ্রুত কোনো মান (value) খুঁজে বের করতে পারো—বারবার `if-else` বা `switch` ব্যবহার না করে।

### সহজভাবে বুঝি:

Lookup Table = **key → value ম্যাপিং**, যেখান থেকে সরাসরি result পাওয়া যায়।

---

## 🔹 উদাহরণ ১: Object দিয়ে Lookup Table

```js
const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

console.log(colors["red"]); // #FF0000
```

👉 এখানে `colors` হলো lookup table
👉 "red" হলো key, আর "#FF0000" হলো value

---

## 🔹 উদাহরণ ২: if-else এর বদলে Lookup Table

❌ if-else দিয়ে:

```js
function getDayName(day) {
  if (day === 1) return "Sunday";
  else if (day === 2) return "Monday";
}
```

✅ Lookup Table দিয়ে:

```js
const days = {
  1: "Sunday",
  2: "Monday",
};

function getDayName(day) {
  return days[day];
}
```

👉 এটা cleaner, faster, এবং maintain করা সহজ

---

## 🔹 উদাহরণ ৩: Array দিয়ে

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[1]); // Banana
```

👉 index দিয়ে value পাওয়া যায়—এটাও এক ধরনের lookup

---

## 🔹 কেন Lookup Table ব্যবহার করা হয়?

- ⚡ দ্রুত data access (O(1) time complexity)
- 🧹 কোড ছোট ও পরিষ্কার হয়
- 🔧 maintain করা সহজ
- 🚀 performance ভালো হয়

---

## 🔹 সংক্ষেপে

**Lookup Table মানে:**
👉 আগে থেকে data সাজিয়ে রাখা, যাতে প্রয়োজন হলে সরাসরি খুঁজে পাওয়া যায়।

---

চাও তাহলে আমি real-life project example (যেমন API response mapping বা game logic) দিয়েও বুঝিয়ে দিতে পারি 👍
