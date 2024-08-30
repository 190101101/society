const auth = require('../middleware/auth');
const user = require('../middleware/user');
const message = require('../middleware/message');

module.exports = { user, auth, message };
