"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Favorites", "userId", {
      type: Sequelize.INTEGER,
      references: { model: "Users", field: "id" },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Favorites", "userId");
  },
};
