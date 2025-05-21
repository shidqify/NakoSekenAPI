const { body, validationResult } = require('express-validator');
const wrapper = require('../helpers/utils/wrapper');
const { BadRequestError } = require('../helpers/error');

const validateProduct = [
  body('name').isString().notEmpty().withMessage('Name is required and must be a string'),
  body('avail_size').isString().notEmpty().withMessage('Available size is required and must be a string'),
  body('price').isDecimal().notEmpty().withMessage('Price is required and must be a decimal'),
  body('stock').isInt().notEmpty().withMessage('Stock is required and must be an integer'),
  body('description').isString().notEmpty().withMessage('Description is required and must be a string'),
  body('image_url').isString().notEmpty().withMessage('Image URL is required and must be a string'),
  body('category').isString().notEmpty().withMessage('Category is required and must be a string'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      wrapper.response(res, 'fail', wrapper.error(new BadRequestError("Validation error")), `Validation error: ${errors.array()}`, 400);
    }
    next();
  }
];

module.exports = validateProduct;