const { body, validationResult } = require('express-validator');
const wrapper = require('../helpers/utils/wrapper');
const { BadRequestError } = require('../helpers/error');

const validateOrder = [
  body('items').isArray({ min: 1 }).withMessage('Items must be a non-empty array'),
  body('items.*.name').isString().notEmpty().withMessage('Each item must have a name (string)'),
  body('items.*.size').isString().notEmpty().withMessage('Each item must have a size (string)'),
  body('items.*.qty').isInt({ min: 1 }).withMessage('Each item must have a quantity (integer >= 1)'),
  body('total').isDecimal().notEmpty().withMessage('Total is required and must be a decimal'),
  body('notes').optional().isString().withMessage('Notes must be a string'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return wrapper.response(
        res,
        'fail',
        wrapper.error(new BadRequestError("Validation error")),
        `Validation error: ${JSON.stringify(errors.array())}`,
        400
      );
    }
    next();
  }
];

module.exports = validateOrder;