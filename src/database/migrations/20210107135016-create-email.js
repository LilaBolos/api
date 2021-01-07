'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_email', {
      id_email: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
      },
      email: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      finished_at: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
    })
  },

  down: async (queryInterface) => queryInterface.dropTable('tb_email')

};
