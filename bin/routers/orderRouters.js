const router = require('express').Router();

const orderController = require('../controllers/orderControllers.js');
const validateOrder = require('../middlewares/validateOrder.js');

router.post(
  '/order',
  validateOrder,
  orderController.createOrder
);
router.get(
  '/order',
  orderController.getOrder
);
router.put(
  '/order',
  validateOrder,
  orderController.updateOrder
)

module.exports = router;