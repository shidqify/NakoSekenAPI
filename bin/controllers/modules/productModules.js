const { InternalServerError, NotFoundError, BadRequestError } = require("../../helpers/error");
const { Product } = require("../../models");
const logger = require('../../helpers/utils/logger')

module.exports.createProduct = async (productData) => {
  try {
    const existData = await this.detailProduct(productData.name);
    const isDuplicate = existData.some(item =>
      item.name === productData.name &&
      item.avail_size === productData.avail_size
    );
    
    if (isDuplicate) {
      throw new BadRequestError("Product already exist");
    };
    
    const result = await Product.create(productData);

    return result;
  } catch (error) {
    console.log(error);
    throw new InternalServerError(error.message);
  }
}

module.exports.detailProduct = async (name) => {
  try {
    const data = await Product.findAll({
      where: {
        name
      }
    });

    if (!data) {
      throw new NotFoundError("Product not found");
    }

    return data;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
}

module.exports.allProduct = async (req, res) => {
  try {
    const data = await Product.findAll();

    if (!data) {
      throw new NotFoundError("Data not found");
    }

    return data;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
}