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

// const User = [];
module.exports = User;
