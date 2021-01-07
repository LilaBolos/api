'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_client', {
      id_client: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
      },
      id_email: {
        type: Sequelize.UUID,
        references: {
          model: 'tb_email',
          key: 'id_email',
        },
        onUpdate: 'CASCADE',
      },
      id_address: {
        type: Sequelize.UUID,
        references: {
          model: 'tb_address',
          key: 'id_address',
        },
        onUpdate: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      whatsapp: {
        type: Sequelize.STRING,
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

  down: async (queryInterface) => queryInterface.dropTable('tb_client')
};
