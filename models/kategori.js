'use strict';
const {
  Model
} = require('sequelize');
const produk = require('./produk');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kategori.hasMany(models.Produk,{
        foreignKey: 'idCategory'
      })
      
    }
  }
  Kategori.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategori',
  });
  return Kategori;
};