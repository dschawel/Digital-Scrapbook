'use strict';
module.exports = (sequelize, DataTypes) => {
  const place = sequelize.define('place', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    latitute: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.STRING
  }, {});
  place.associate = function(models) {
    // associations can be defined here
  };
  return place;
};