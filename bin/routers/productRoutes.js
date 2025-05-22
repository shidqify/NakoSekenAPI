const router = require('express').Router();

const productController = require('../controllers/productControllers.js');
const validateProduct = require('../middlewares/validateProduct.js');

router.post(
  '/',
  validateProduct,
  productController.createProduct
);
router.get('/',
  productController.getAllProduct
);
router.get('/:name',
  productController.getDetailProduct
);
router.put('/:name',
  validateProduct,
  productController.updateProduct
);
router.delete('/:id',
  productController.deleteProduct
);

module.exports = router;