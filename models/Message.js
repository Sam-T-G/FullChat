const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Message extends Model {}

Message.init(
  {
    id: {},
    message: {},
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "message",
  }
);

module.exports = Message;
