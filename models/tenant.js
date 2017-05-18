module.exports = function(sequelize, DataTypes) {
  var Tenant = sequelize.define("Tenant", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
      isEmail: true// checks for email format (foo@bar.com)
      }
    },
    street_address: DataTypes.STRING,
    // apartment_number: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    no_of_occupants: DataTypes.INTEGER,
    rent: DataTypes.DECIMAL(10,2),
    rent_last_paid: DataTypes.DATEONLY,
    total_rent_paid: DataTypes.DECIMAL(10,2),
    lease_start: DataTypes.DATEONLY,
    lease_end: DataTypes.DATEONLY,
    // tenants default to false parking status
    parking_permit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    parking_permit_no: DataTypes.INTEGER,
    parking_permit_status: DataTypes.STRING,
    soft_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Tenant to have Work Orders
      classMethods: {
        associate: function(models) {
          Tenant.hasMany(models.WorkOrder);
          // Tenant.belongsTo(models.Apartment);
        }
      }
    }
  );
  return Tenant;
};