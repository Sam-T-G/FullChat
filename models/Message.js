const { Model, DataTypes, NOW } = require("sequelize");

const sequelize = require("../config/connection.js");

class Message extends Model {}

// Establishing message model; message elements shown when users chat within the chatroom
Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "chat",
        key: "id",
      },
    },
    date: {
      type: DataTypes.STRING,
      default: Date.now(),
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "message",
  }
);

module.exports = Message;
