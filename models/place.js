'use strict';
module.exports = (sequelize, DataTypes) => {
  const place = sequelize.define('place', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  place.associate = function(models) {
    // associations can be defined here
  };
  return place;
};