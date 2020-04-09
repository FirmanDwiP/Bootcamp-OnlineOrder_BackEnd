"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers",
      [
        {
          fullname: "Admin",
          username: "admin",
          email: "admin@admin.com",
          phone_number: "081111111111",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "User",
          username: "user",
          email: "buser@admin.com",
          phone_number: "082222222222",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers", null, {});
  },
};