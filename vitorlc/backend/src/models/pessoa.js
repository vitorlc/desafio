/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoa', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    no_pessoa: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    no_email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    endereco: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sexo: {
      type: DataTypes.ENUM('HOMEM','MULHER'),
      allowNull: false
    },
    ic_ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'pessoa'
  });
};
