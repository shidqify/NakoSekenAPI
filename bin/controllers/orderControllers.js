const wrapper = require('../helpers/utils/wrapper');
const orderModules = require('./modules/orderModules');
const logger = require("../helpers/utils/logger");

module.exports.createOrder = (req, res) => {
  const orderData = {
    items: req.body.items,
    /* 
    {
      name,
      size,
      quantity
    }
    */
    notes: req.body.notes,
    payment_method: req.body.payment_method
  }

  orderModules.createOrder(orderData)
    .then(({ orderResult, orderItemResult }) => {
      const items = orderItemResult.map(item => ({
        product_id: item.product_id,
        name: item.Product.name,
        size: item.Product.avail_size,
        category: item.Product.category,
        quantity: item.quantity,
        total_price: item.total_price
      }));

      const result = {
        order_id: orderResult.order_id,
        payment_code: orderResult.payment_code,
        status: orderResult.status,
        items,
        total: orderResult.total,
        notes: orderResult.notes,
        expired_at: orderResult.expired_at,
      };
      logger.info('Order has been created');
      wrapper.response(res, 'success', wrapper.data(result), 'Order has been created', 201);
    })
    .catch(err => {
      logger.error('Error while creating order', err);
      wrapper.response(res, 'fail', wrapper.error(err), `Error while creating order. Error: ${err}`, 400);
    });
}
