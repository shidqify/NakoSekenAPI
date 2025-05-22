const router = require('express').Router();

const orderController = require('../controllers/orderControllers.js');
const validateOrder = require('../middlewares/validateOrder.js');

router.post(
  '/',
  validateOrder,
  orderController.createOrder
);
// router.get(
//   '/',
//   orderController.getOrder
// );
// router.put(
//   '/',
//   validateOrder,
//   orderController.updateOrder
// )

module.exports = router;