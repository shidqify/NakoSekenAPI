'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Order_Items', [
      {
        "order_item_id": 1, "order_id": 1, "product_id": 4, "name": "Mocha", "size": "small", "price": 85600, "quantity": 1, "total_price": 85600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 2, "order_id": 1, "product_id": 1, "name": "Latte", "size": "small", "price": 78880, "quantity": 1, "total_price": 78880,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 3, "order_id": 1, "product_id": 9, "name": "Cappuccino", "size": "large", "price": 76000, "quantity": 1, "total_price": 76000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 4, "order_id": 2, "product_id": 4, "name": "Mocha", "size": "small", "price": 85600, "quantity": 1, "total_price": 85600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 5, "order_id": 2, "product_id": 3, "name": "Latte", "size": "large", "price": 88000, "quantity": 1, "total_price": 88000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 6, "order_id": 2, "product_id": 14, "name": "Green Tea", "size": "large", "price": 56000, "quantity": 1, "total_price": 56000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 7, "order_id": 3, "product_id": 8, "name": "Cappuccino", "size": "medium", "price": 69600, "quantity": 3, "total_price": 208800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 8, "order_id": 4, "product_id": 1, "name": "Latte", "size": "small", "price": 78880, "quantity": 1, "total_price": 78880,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 9, "order_id": 4, "product_id": 7, "name": "Cappuccino", "size": "small", "price": 66400, "quantity": 2, "total_price": 132800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 10, "order_id": 4, "product_id": 14, "name": "Green Tea", "size": "large", "price": 56000, "quantity": 3, "total_price": 168000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 11, "order_id": 5, "product_id": 1, "name": "Latte", "size": "small", "price": 78880, "quantity": 3, "total_price": 236640,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 12, "order_id": 5, "product_id": 6, "name": "Mocha", "size": "large", "price": 96000, "quantity": 2, "total_price": 192000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 13, "order_id": 6, "product_id": 4, "name": "Mocha", "size": "small", "price": 85600, "quantity": 1, "total_price": 85600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_item_id": 14, "order_id": 6, "product_id": 13, "name": "Green Tea", "size": "medium", "price": 52000, "quantity": 2, "total_price": 104000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
