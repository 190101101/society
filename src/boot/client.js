let client = null;

let setSocket = (id) => {
  client = id;
};

let getSocket = () => {
  return client;
};

module.exports = { setSocket, getSocket };
