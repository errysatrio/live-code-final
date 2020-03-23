'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class User extends Model {}
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:'username cant be empty'
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:'password cant be empty'
        }
      }
    },
    role: DataTypes.STRING
  }, {sequelize});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Report)
  };
  return User;
};