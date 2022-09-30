const { Model, DataTypes, NOW } = require("sequelize");

const sequelize = require("../config/connection.js");

class Message extends Model {}

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
          model: 'chat',
          key: 'id',
        },
    },
    date: {
        default: NOW,
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
