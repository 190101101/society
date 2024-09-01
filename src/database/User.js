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
    icon: `monster (66).png`,
    createdAt,
    updatedAt,
  },
  {
    id,
    username: `222`,
    password,
    icon: `monster (26).png`,
    createdAt,
    updatedAt,
  },
];

module.exports = User;
