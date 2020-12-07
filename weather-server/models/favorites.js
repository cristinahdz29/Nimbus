'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //favorites belong to users (b/c users can have many favorited cities)
      models.Favorites.belongsTo(models.Users, {foreignKey: 'userId'})
    }
  };
  Favorites.init({
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};