module.exports = function(sequelize, DataTypes) {
  var WorkOrder = sequelize.define("WorkOrder", {
    request: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    apartment_number: DataTypes.STRING,
    status: DataTypes.STRING,
    notes: DataTypes.TEXT,
    service_cost: DataTypes.DECIMAL(10,2),
    permission_to_enter: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no"
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date_completed: DataTypes.DATEONLY,
    soft_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
    {
      // We're saying that we want our Tenant to have Work Orders
      classMethods: {
        associate: function(models) {
          // A Resident (foreignKey) is required or a Work Order can't be made
          WorkOrder.belongsTo(models.Tenant);
          WorkOrder.belongsTo(models.Contractor, {
            foreignKey: {
              allowNull: true
            }
          });
        }
      }
    });
  return WorkOrder;
  };

