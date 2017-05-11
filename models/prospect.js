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
    // current_address_country: DataTypes.STRING,
    // current_address_street: DataTypes.STRING,
    // current_address_city: DataTypes.STRING,
    // current_address_state: DataTypes.STRING,
    // current_address_zip_code: DataTypes.(INTEGER(11).ZEROFILL),
    // total_no_of_occupants: DataTypes.INTEGER,
    // requested_lease_term: DataTypes.STRING,
    // how_did_you_hear: DataTypes.STRING,
    // property_unit: DataTypes.STRING,
    // pets: DataTypes.STRING,
    move_in_date: DataTypes.DATEONLY,
    message: DataTypes.TEXT
  });
  return Prospect;
};






