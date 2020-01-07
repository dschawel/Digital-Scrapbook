'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    userId: DataTypes.INTEGER,
    pictureUrl: DataTypes.STRING
  }, {});
  image.associate = function(models) {
    // associations can be defined here
    models.image.belongsTo(models.user)
  };
  return image;
};