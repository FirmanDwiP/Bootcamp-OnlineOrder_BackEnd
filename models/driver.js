'use strict';
module.exports = (sequelize, DataTypes) => {
  const driver = sequelize.define('driver', {
    fullname: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  driver.associate = function(models) {
    driver.hasMany(models.order, {
      foreignKey: "driver_id",
      onDelete: "CASCADE",
    });
  };
  return driver;
};