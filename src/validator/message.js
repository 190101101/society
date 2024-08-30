const { body } = require('express-validator');

const messageSchema = [
  body('message')
    .notEmpty({ ignore_whitespace: true })
    .withMessage('message is empty')
    .isLength({ min: 3, max: 100 })
    .withMessage('string min:3 max:100'),
];

module.exports = { messageSchema };
