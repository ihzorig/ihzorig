const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnect");
const Company = require("./company"); // Assuming you have defined the Company model

const Offices = sequelize.define("Offices", {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Company, // Reference to the Company model
      key: "name" // Name of the referenced column in Companies
    },
  },
  address: {
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

// Example hook usage (replace with appropriate hook logic)
Offices.addHook("beforeCreate", (office, options) => {
  console.log("Before create hook executed");
  // Example: Set default createdAt value if not provided
  if (!office.createdAt) {
    office.createdAt = new Date();
  }
});

// Define association with Company model
Offices.belongsTo(Company, {
  foreignKey: 'companyName',
  targetKey: 'name',
  as: 'company', // Alias to use when retrieving associated data
});

module.exports = Offices;
