/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animal_x_lote', {
    fk_id_animal: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      references: {
        model: 'animal',
        key: 'id'
      }
    },
    fk_id_lote: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      references: {
        model: 'animal_lote',
        key: 'id'
      }
    },
    dt_entrada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dt_saida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'animal_x_lote'
  });
};
