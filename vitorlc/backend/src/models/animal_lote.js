/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Lote = sequelize.define('animal_lote', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    no_lote: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ds_lote: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'animal_lote'
  });
  return Lote
};
