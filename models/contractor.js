module.exports = function(sequelize, DataTypes) {
  var Contractor = sequelize.define("Contractor", {
    business_name: DataTypes.STRING,
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   validate: {
    //   isEmail: true// checks for email format (foo@bar.com)
    //   }
    // },
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.INTEGER(11).ZEROFILL,
    mailing_address: DataTypes.STRING,
    mailing_city: DataTypes.STRING,
    mailing_zip_code: DataTypes.INTEGER(11).ZEROFILL,
    naics: DataTypes.INTEGER,
    primary_naics_description: DataTypes.STRING
  },
    {
      // We're saying that we want our Contractor to have Work Orders
      classMethods: {
        associate: function(models) {Contractor.hasMany(models.WorkOrders)}
      }
    }
  );
  return Contractor;
};
