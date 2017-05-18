module.exports = function(sequelize, DataTypes) {
  var Contractor = sequelize.define("Contractor", {
    business_name: DataTypes.STRING,
    doing_business_as_name: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    mailing_address: DataTypes.STRING,
    mailing_city: DataTypes.STRING,
    mailing_zip_code: DataTypes.INTEGER(11).ZEROFILL,
    naics: DataTypes.INTEGER,
    primary_naics_description: DataTypes.STRING,
    soft_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
    {
      // We're saying that we want our Contractor to have Work Orders
      classMethods: {
        associate: function(models) {
          Contractor.hasMany(models.WorkOrder)
        }
      }
    }
  );
  return Contractor;
};
