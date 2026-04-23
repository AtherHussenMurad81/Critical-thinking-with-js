const events = [
  { id: 1, type: "login", timestamp: new Date().toISOString() },
  {
    id: 2,
    type: "logout",
    timestamp: new Date(Date.now() + 1000).toISOString(),
  },
  {
    id: 3,
    type: "purchase",
    timestamp: new Date(Date.now() + 2000).toISOString(),
  },
  {
    id: 4,
    type: "signup",
    timestamp: new Date(Date.now() + 3000).toISOString(),
  },
  {
    id: 5,
    type: "update",
    timestamp: new Date(Date.now() + 4000).toISOString(),
  },
  {
    id: 6,
    type: "delete",
    timestamp: new Date(Date.now() + 5000).toISOString(),
  },
];

const interval = 30 * 60 * 1000; //30 minits in MS

const getBinningTimesStamp = (timestamp) => {
  const date = new Date(timestamp);
  //   console.log(date.getTime());
  const floodedDate = Math.floor(date.getTime() / interval) * interval;
  //   console.log(floodedDate);
  return new Date(floodedDate);
};
// console.log(getBinningTimesStamp("2025-10-22T10:01:00Z"));
const binnedData = events.reduce((acc, event) => {
  const bin = getBinningTimesStamp(event.timestamp);

  if (!acc[bin]) {
    acc[bin] = { total: 0 };
  }
  acc[bin].total += 1;
  return acc;
}, {});
console.log(binnedData);
