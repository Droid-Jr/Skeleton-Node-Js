"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models: {conversations, mesages, partipants, users}
      // define association here
      Users.hasMany(models.Conversations, { foreignKey: "createdBy" });
      Users.hasMany(models.Messages, { foreignKey: "senderId" });
      Users.hasMany(models.Participants, { foreignKey: "userId" });
    }
  }
  Users.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.ENUM("user", "admin"),
      password: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      validEmail: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
