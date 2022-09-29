const { Model, DataTypes } = require("sequelize");

const sequelize = require ("../config/connection.js");

class Chat extends Model {}

module.exports = Chat;