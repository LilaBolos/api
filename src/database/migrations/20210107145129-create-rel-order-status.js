'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_rel_order_status', {
      id_order_status: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
      },
      id_status: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tb_status',
          key: 'id_status',
        }
      },
      id_client: {
        type: Sequelize.UUID,
        references: {
          model: 'tb_client',
          key: 'id_client',
        }
      },
      id_order: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tb_order',
          key: 'id_order',
        }
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

  down: async (queryInterface) => queryInterface.dropTable('tb_rel_order_status')
};
