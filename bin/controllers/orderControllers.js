const wrapper = require('../helpers/utils/wrapper');
const orderModules = require('./modules/orderModules');
const logger = require("../helpers/utils/logger");

module.exports.createOrder = (req, res) => {
  const orderData = {
    items: req.body.items,
    total: parseFloat(req.body.total),
    notes: req.body.notes,
  }

  orderModules.createOrder(orderData)
    .then(resp => {
      logger.info('Order has been created');
      wrapper.response(res, 'success', wrapper.data(resp), 'Order has been created', 201);
    })
    .catch(err => {
      logger.error('Error while creating order', err);
      wrapper.response(res, 'fail', wrapper.error(err), `Error while creating order. Error: ${err}`, 400);
    });
}
