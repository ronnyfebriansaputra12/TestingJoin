'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produk.belongsTo(models.Kategori, {
        foreignKey: 'id',
        target_key : 'idCategory'
      })
    }
  }
  Produk.init({
    description: DataTypes.STRING,
    idCategory: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};