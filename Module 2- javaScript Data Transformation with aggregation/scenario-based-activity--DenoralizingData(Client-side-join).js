// * Denormalizing Data (client side join)

const users = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" },
  { id: 3, name: "Sumi" },
];
const posts = [
  { id: 1, userId: 1, title: "JavaScript Basics" },
  { id: 2, userId: 1, title: "Array Methods in JS" },
  { id: 3, userId: 2, title: "Node.js Introduction" },
  { id: 4, userId: 3, title: "React Hooks Guide" },
  { id: 5, userId: 2, title: "Express.js Routing" },
];

// 1.  create hashTable of posts

const postByUser = posts.reduce((table, post) => {
  const { userId } = post;

  if (!table[userId]) {
    table[userId] = [];
  }
  table[userId].push(post);
  return table;
});
// console.log(postByUser);

const userWithPost = users.map((user) => {
  return {
    ...user,
    post: JSON.stringify(postByUser[user.id] || []),
  };
});
// console.log(userWithPost);
