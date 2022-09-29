const { Model, DataTypes } = require("sequelize");

const sequelize = require ("../config/connection.js");

class Message extends Model {}

module.exports = Message;