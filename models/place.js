'use strict';
module.exports = (sequelize, DataTypes) => {
  const place = sequelize.define('place', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  place.associate = function(models) {
    // associations can be defined here
    models.place.belongsTo(models.user)
  };
  return place;
};