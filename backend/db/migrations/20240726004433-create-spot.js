'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Users",
          id:"id"
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE"
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DECIMAL
      },
      lng: {
        type: Sequelize.DECIMAL
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots'
    // await queryInterface.removeConstraint("avatar_bnb.Bookings", "Bookings_spotId_fkey")
    // await queryInterface.removeConstraint("avatar_bnb.Reviews", "Reviews_spotId_fkey")
    // await queryInterface.removeConstraint("avatar_bnb.SpotImages", "SpotImages_spotId_fkey")
    // await queryInterface.dropTable('Bookings');
    // await queryInterface.dropTable('Reviews');
    // await queryInterface.dropTable('SpotImages');
    // await queryInterface.dropTable('Spots');
    await queryInterface.dropTable(options);
  }
};
