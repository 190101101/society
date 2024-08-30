const auth = require('../middleware/auth');
const user = require('../middleware/user');
const sanitize = require('../middleware/sanitize');

module.exports = { user, auth, sanitize };
