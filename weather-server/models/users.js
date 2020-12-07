'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //user can have many favorites
      models.Users.hasMany(models.Favorites, {foreignKey: "userId"})

    }
  };
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    favoritesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};