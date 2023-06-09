"use strict";
const { user, role } = require("../models");

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
    await role.bulkCreate([
      {
        level_access: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   level_access: "seller",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      {
        level_access: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await user.bulkCreate(
      [
        {
          email: "admin@mail.com",
          password: "adminpass",
          roleId: 1,
        },
        {
          username: "user",
          email: "user@mail.com",
          password: "userpass",
        },
      ],
      { individualHooks: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
