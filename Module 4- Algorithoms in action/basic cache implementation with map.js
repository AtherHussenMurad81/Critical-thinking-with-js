const dataCache = new Map();

const expensiveTask = (id) => {
  console.log("Run the expensive task for: ", id);
  return {
    id: id,
    data: `Some data for id ${id}`,
    timestamp: new Date().getTime(),
  };
};
const getData = (id) => {
  if (dataCache.has(id)) {
    console.log("cache hit for id: ", id);
    // console.log(dataCache);
    return dataCache.get(id);
  }
  //   return expensiveTask(id);
  console.log("cache miss for id: ", id);
  const data = expensiveTask(id);
  dataCache.set(id, data);
  return data;
};
console.log(dataCache);
console.log(getData(1234));
console.log(getData(1234));
console.log(dataCache);
