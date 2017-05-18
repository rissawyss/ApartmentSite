module.exports = function(sequelize, DataTypes) {
  var Prospect = sequelize.define("Prospect", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
      isEmail: true// checks for email format (foo@bar.com)
      }
    },
    telephone: DataTypes.STRING,
    bedrooms: DataTypes.STRING,
    move_in_date: DataTypes.STRING,
    message: DataTypes.TEXT,
    soft_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Prospect;
};






