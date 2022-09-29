const { Model, DataTypes } = require("sequelize");

const sequelize = require ("../config/connection.js");

class User extends Model {}

module.exports = User;