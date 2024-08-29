const { body } = require('express-validator');

const authSchema = [
  body('username')
    .notEmpty({ ignore_whitespace: true })
    .withMessage('username is empty')
    .isLength({ min: 3, max: 10 })
    .withMessage('string min:3 max:10'),
  body('password')
    .notEmpty({ ignore_whitespace: true })
    .withMessage('password is empty')
    .isLength({ min: 3, max: 10 })
    .withMessage('string min:3 max:10'),
];

module.exports = { authSchema };
