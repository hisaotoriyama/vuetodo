'use strict';
module.exports = (sequelize, DataTypes) => {
  const vuetodotables_cookies = sequelize.define('vuetodotables_cookies', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    item: DataTypes.STRING,
    isDone: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    underscored: true,
  });
  vuetodotables_cookies.associate = function(models) {
    // associations can be defined here
  };
  return vuetodotables_cookies;
};