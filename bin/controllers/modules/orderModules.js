const { InternalServerError, NotFoundError, BadRequestError } = require("../../helpers/error");
const { Order, Order_Item, sequelize, Product } = require("../../models");
const logger = require('../../helpers/utils/logger');
const { detailProduct } = require("./productModules");

const generatePaymentCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

module.exports.createOrder = async (orderData) => {
  const t = await sequelize.transaction();

  try {
    let listOrder = await Promise.all(orderData.items.map(async item => {
      const data = await detailProduct({
        name: item.name,
        avail_size: item.size
      });

      if (!data || data.stock < 1) {
        throw new NotFoundError("Product Not Found or Out Of Stock");
      }

      return {
        product_id: data[0].product_id,
        name: data[0].name,
        size: data[0].avail_size,
        price: data[0].price,
        quantity: item.quantity,
        total_price: parseInt(data[0].price) * item.quantity
      };
    }));

    const payment_code = generatePaymentCode();
    const subtotal = listOrder.reduce((sum, item) => sum + item.total_price, 0);
    const tax = subtotal * 11 / 12 * 12 / 100;
    const receiptData = {
      payment_code,
      status: "pending",
      subtotal,
      tax,
      total: subtotal + tax,
      notes: orderData.notes,
      payment_method: orderData.payment_method,
      expired_at: new Date(Date.now() + 15 * 60 * 1000) // 15 minutes from now
    }

    const orderResult = await Order.create(receiptData, { transaction: t });

    listOrder = listOrder.map(item => ({
      ...item,
      order_id: orderResult.order_id,
    }));

    await Order_Item.bulkCreate(listOrder, { transaction: t });

    const orderItemResult = await Order_Item.findAll({
      where: { order_id: orderResult.order_id },
      attributes: ['product_id', 'quantity', 'total_price'],
      include: [{
        model: Product,
        attributes: ['name', 'category', 'avail_size']
      }],
      transaction: t
    });

    await t.commit();

    return { orderResult, orderItemResult };
  } catch (error) {
    await t.rollback()
    throw new InternalServerError(error.message);
  }
};

module.exports.getOrder = async (payment_code) => {
  try {
    const order = await Order.findOne({
      where: { payment_code },
      include: [
        {
          model: Order_Item,
          include: [
            {
              model: Product,
              attributes: ['category']
            }
          ],
          attributes: ['product_id', 'name', 'size', 'quantity', 'total_price']
        }
      ],
      attributes: ['order_id', 'payment_code', 'status', 'total', 'notes', 'expired_at']
    });

    if (!order) {
      throw new NotFoundError("Order not found");
    }

    return order;
  } catch (error) {
    throw new InternalServerError(error.message);
  }
}