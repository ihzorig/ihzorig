const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnect");

const Company = sequelize.define("Companies", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  register: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: "createdAt",
  },
});

// Example hook usage (replace with appropriate hook)
Company.addHook("beforeCreate", (company, options) => {
  console.log("Before create hook executed");
});

module.exports = Company;
