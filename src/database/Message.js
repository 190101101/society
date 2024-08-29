const Message = Array.from({ length: 10 }, (_, index) => {
  return {
    username: `user ${index + 1}`,
    message: `user ${
      index + 1
    } Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis fugit omnis repellendus fuga. Voluptatibus iusto, consectetur rem ab error, odit deleniti eum voluptatum consequuntur optio sapiente deserunt, corporis dolorum asperiores?`,
    icon: `monster (${index + 1}).png`,
    createdAt: new Date().toLocaleString(),
  };
});

// const User = [];
module.exports = Message;
