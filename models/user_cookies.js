'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_cookies = sequelize.define('user_cookies', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    underscored: true,
  });
  user_cookies.associate = function(models) {
    // associations can be defined here
  };
  return user_cookies;
};