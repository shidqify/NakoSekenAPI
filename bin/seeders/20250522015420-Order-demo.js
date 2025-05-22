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

    await queryInterface.bulkInsert('Orders', [
      {
        "order_id": 1,
        "payment_code": "123TTQ",
        "status": "completed",
        "subtotal": 240480,
        "tax": 24048,
        "total": 264528,
        "notes": "",
        "payment_method": "cash",
        "expired_at": "2025-05-20 18:00:07",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_id": 2,
        "payment_code": "124TTQ",
        "status": "pending",
        "subtotal": 229600,
        "tax": 22960,
        "total": 252560,
        "notes": "no milk",
        "payment_method": "cash",
        "expired_at": "2025-05-21 00:35:07",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_id": 3,
        "payment_code": "125TTQ",
        "status": "pending",
        "subtotal": 208800,
        "tax": 20880,
        "total": 229680,
        "notes": "no sugar",
        "payment_method": "cash",
        "expired_at": "2025-05-20 15:50:07",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_id": 4,
        "payment_code": "126TTQ",
        "status": "pending",
        "subtotal": 379680,
        "tax": 37968,
        "total": 417648,
        "notes": "less ice",
        "payment_method": "e-wallet",
        "expired_at": "2025-05-21 02:40:07",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_id": 5,
        "payment_code": "127TTQ",
        "status": "completed",
        "subtotal": 428640,
        "tax": 42864,
        "total": 471504,
        "notes": "",
        "payment_method": "e-wallet",
        "expired_at": "2025-05-21 03:05:07",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "order_id": 6,
        "payment_code": "128TTQ",
        "status": "cancelled",
        "subtotal": 189600,
        "tax": 18960,
        "total": 208560,
        "notes": "love yu somay",
        "payment_method": "e-wallet",
        "expired_at": "2025-05-20 16:34:07",
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
