const rowApiData = [
  {
    id: 1,
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 15.99,
    rating: 4.2,
    stock: 120,
  },
  {
    id: 2,
    productName: "Bluetooth Headphones",
    category: "Electronics",
    price: 45.5,
    rating: 4.5,
    stock: 80,
  },
  {
    id: 3,
    productName: "Keyboard",
    category: "Electronics",
    price: 25.0,
    rating: 4.1,
    stock: 150,
  },
  {
    id: 4,
    productName: "Laptop Stand",
    category: "Accessories",
    price: 30.0,
    rating: 4.3,
    stock: 60,
  },
  {
    id: 5,
    productName: "USB-C Cable",
    category: "Accessories",
    price: 10.0,
    rating: 4.0,
    stock: 200,
  },
  {
    id: 6,
    productName: "Smartphone",
    category: "Electronics",
    price: 699.99,
    rating: 4.7,
    stock: 40,
  },
  {
    id: 7,
    productName: "Tablet",
    category: "Electronics",
    price: 299.99,
    rating: 4.4,
    stock: 70,
  },
  {
    id: 8,
    productName: "Monitor",
    category: "Electronics",
    price: 199.99,
    rating: 4.6,
    stock: 50,
  },
  {
    id: 9,
    productName: "Desk Lamp",
    category: "Home",
    price: 20.0,
    rating: 4.2,
    stock: 90,
  },
  {
    id: 10,
    productName: "Office Chair",
    category: "Furniture",
    price: 120.0,
    rating: 4.3,
    stock: 30,
  },

  {
    id: 11,
    productName: "Backpack",
    category: "Accessories",
    price: 35.0,
    rating: 4.4,
    stock: 100,
  },
  {
    id: 12,
    productName: "Water Bottle",
    category: "Home",
    price: 12.5,
    rating: 4.1,
    stock: 180,
  },
  {
    id: 13,
    productName: "Notebook",
    category: "Stationery",
    price: 5.0,
    rating: 4.0,
    stock: 300,
  },
  {
    id: 14,
    productName: "Pen Set",
    category: "Stationery",
    price: 8.0,
    rating: 4.2,
    stock: 250,
  },
  {
    id: 15,
    productName: "Gaming Mouse",
    category: "Electronics",
    price: 55.0,
    rating: 4.6,
    stock: 70,
  },
  {
    id: 16,
    productName: "Gaming Keyboard",
    category: "Electronics",
    price: 85.0,
    rating: 4.7,
    stock: 65,
  },
  {
    id: 17,
    productName: "External Hard Drive",
    category: "Electronics",
    price: 99.99,
    rating: 4.5,
    stock: 55,
  },
  {
    id: 18,
    productName: "Power Bank",
    category: "Electronics",
    price: 25.0,
    rating: 4.3,
    stock: 140,
  },
  {
    id: 19,
    productName: "Phone Case",
    category: "Accessories",
    price: 15.0,
    rating: 4.1,
    stock: 220,
  },
  {
    id: 20,
    productName: "Screen Protector",
    category: "Accessories",
    price: 7.0,
    rating: 4.0,
    stock: 300,
  },

  {
    id: 21,
    productName: "LED Strip Lights",
    category: "Home",
    price: 18.0,
    rating: 4.3,
    stock: 110,
  },
  {
    id: 22,
    productName: "Coffee Maker",
    category: "Home Appliances",
    price: 75.0,
    rating: 4.5,
    stock: 45,
  },
  {
    id: 23,
    productName: "Blender",
    category: "Home Appliances",
    price: 60.0,
    rating: 4.2,
    stock: 50,
  },
  {
    id: 24,
    productName: "Electric Kettle",
    category: "Home Appliances",
    price: 35.0,
    rating: 4.4,
    stock: 75,
  },
  {
    id: 25,
    productName: "Toaster",
    category: "Home Appliances",
    price: 40.0,
    rating: 4.3,
    stock: 60,
  },
  {
    id: 26,
    productName: "Air Fryer",
    category: "Home Appliances",
    price: 120.0,
    rating: 4.6,
    stock: 35,
  },
  {
    id: 27,
    productName: "Vacuum Cleaner",
    category: "Home Appliances",
    price: 150.0,
    rating: 4.5,
    stock: 25,
  },
  {
    id: 28,
    productName: "Desk Organizer",
    category: "Furniture",
    price: 22.0,
    rating: 4.1,
    stock: 95,
  },
  {
    id: 29,
    productName: "Wall Clock",
    category: "Home",
    price: 18.5,
    rating: 4.2,
    stock: 80,
  },
  {
    id: 30,
    productName: "Curtains",
    category: "Home",
    price: 45.0,
    rating: 4.3,
    stock: 55,
  },

  {
    id: 31,
    productName: "T-shirt",
    category: "Clothing",
    price: 15.0,
    rating: 4.1,
    stock: 200,
  },
  {
    id: 32,
    productName: "Jeans",
    category: "Clothing",
    price: 40.0,
    rating: 4.4,
    stock: 120,
  },
  {
    id: 33,
    productName: "Sneakers",
    category: "Footwear",
    price: 70.0,
    rating: 4.6,
    stock: 90,
  },
  {
    id: 34,
    productName: "Sandals",
    category: "Footwear",
    price: 25.0,
    rating: 4.2,
    stock: 110,
  },
  {
    id: 35,
    productName: "Jacket",
    category: "Clothing",
    price: 90.0,
    rating: 4.5,
    stock: 60,
  },
  {
    id: 36,
    productName: "Watch",
    category: "Accessories",
    price: 150.0,
    rating: 4.7,
    stock: 40,
  },
  {
    id: 37,
    productName: "Sunglasses",
    category: "Accessories",
    price: 30.0,
    rating: 4.3,
    stock: 85,
  },
  {
    id: 38,
    productName: "Wallet",
    category: "Accessories",
    price: 20.0,
    rating: 4.2,
    stock: 130,
  },
  {
    id: 39,
    productName: "Perfume",
    category: "Beauty",
    price: 55.0,
    rating: 4.6,
    stock: 75,
  },
  {
    id: 40,
    productName: "Face Wash",
    category: "Beauty",
    price: 12.0,
    rating: 4.1,
    stock: 160,
  },
];

// Output => [{name: 'phone'}, {name: 'smart Watch'}]

//   {
//     id: 1,
//     productName: "Wireless Mouse",
//     category: "Electronics",
//     price: 15.99,
//     rating: 4.2,
//     stock: 120,
//   },
// process
// filter => electrinices
//  sort by rating
//  slice => top 3 or 1st 3
//  map=> transform object shape to

const topElectronics = rowApiData.filter(
  (item) => item.category === "Electronics",
);
// filter
// console.log(topElectronics);
// console.log(topElectronics.length);

// const smallsortToLarge = rowApiData.sort((a, b) => a.rating - b.rating);
// console.log(smallsortToLarge); //cuto teke boro
// const sort = rowApiData.sort((a, b) => a.rating - b.rating);

const largeToSmallSort = topElectronics.sort((a, b) => b.rating - a.rating);
// console.log(largeToSmallSort);

const slice = largeToSmallSort.slice(0, 3);

// console.log(slice.length);

const map = slice.map((item) => {
  return {
    name: item.productName,
  };
});
// note: if i one line map i cannot write return
// console.log(map);
