const router = require('express').Router();

const productController = require('../controllers/productControllers.js');
const validateProduct = require('../middlewares/validateProduct.js');

router.post(
  '/product',
  validateProduct,
  productController.createProduct
);
router.get('/product',
  productController.getAllProduct
);
router.get('/product/:name',
  productController.getDetailProduct
);
router.put('/product/:name',
  validateProduct,
  productController.updateProduct
);
router.delete('/product/:name',
  productController.deleteProduct
);

module.exports = router;