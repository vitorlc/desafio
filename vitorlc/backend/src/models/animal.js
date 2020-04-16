/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animal', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    no_animal: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    no_raca: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sexo: {
      type: DataTypes.ENUM('FEMEA','MACHO'),
      allowNull: false
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    vr_peso: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fk_id_pessoa: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      references: {
        model: 'pessoa',
        key: 'id'
      }
    }
  }, {
    tableName: 'animal'
  });
};
