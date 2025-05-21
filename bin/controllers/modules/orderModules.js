const { InternalServerError, NotFoundError, BadRequestError } = require("../../helpers/error");
const { Order, Order_Item } = require("../../models");
const logger = require('../../helpers/utils/logger');

module.exports.createOrder = async (orderData) => {
  try {
    
  } catch (error) {
    throw new InternalServerError(error.message);
  }
}