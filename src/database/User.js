/*
const User = Array.from({ length: 20 }, (_, index) => {
  return {
    id,
    username: `user ${index + 1}`,
    password: `user ${index + 1}`,
    icon: `monster (${index + 1}).png`,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
});
*/

const id = Date.now();
const password = 111;
const createdAt = new Date().toLocaleString();
const updatedAt = new Date().toLocaleString();

const User = [
  {
    id,
    username: `kuki`,
    password,
    icon: `monster (21).png`,
    createdAt,
    updatedAt,
  },
  {
    id,
    username: `pepi`,
    password,
    icon: `monster (3).png`,
    createdAt,
    updatedAt,
  },
  {
    id,
    username: `apsi`,
    password,
    icon: `monster (4).png`,
    createdAt,
    updatedAt,
  },
  {
    id,
    username: `pepikus`,
    password,
    icon: `monster (5).png`,
    createdAt,
    updatedAt,
  },
  {
    id,
    username: `111`,
    password,
    icon: `monster (6).png`,
    createdAt,
    updatedAt,
  },
];

module.exports = User;
