'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_order', {
      id_order: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
      },
      id_address: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tb_address',
          key: 'id_address',
        }
      },
      id_client: {
        type: Sequelize.UUID,
        references: {
          model: 'tb_client',
          key: 'id_client',
        }
      },
      order_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      party_theme: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      party_kit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      party_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      delivery_hour: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      client_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      client_cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      client_whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
      },


    })
  },

  down: async (queryInterface) => queryInterface.dropTable('tb_order')
};
