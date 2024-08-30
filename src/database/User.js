/*
const User = Array.from({ length: 20 }, (_, index) => {
  return {
    id: Date.now() + index + 1,
    username: `user ${index + 1}`,
    password: `user ${index + 1}`,
    icon: `monster (${index + 1}).png`,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
});
*/

const User = [
  {
    id: Date.now(),
    username: `111`,
    password: `111`,
    icon: `monster (1).png`,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: Date.now(),
    username: `pepi`,
    password: `111`,
    icon: `monster (2).png`,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: Date.now(),
    username: `apsi`,
    password: `111`,
    icon: `monster (3).png`,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
];

module.exports = User;
