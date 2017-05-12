module.exports = function(sequelize, DataTypes) {
  var WorkOrder = sequelize.define("WorkOrder", {
    request: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    submitted: DataTypes.DATE,
    status: DataTypes.STRING,
    last_activity: DataTypes.DATE,
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
    date_completed: DataTypes.DATEONLY
  },
    {
      // We're saying that we want our Tenant to have Work Orders
      classMethods: {
        associate: function(models) {
          // An Tenant (foreignKey) is required or a Work Order can't be made
          WorkOrder.belongsTo(models.Tenant, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      },
      // We're saying that we want our Contractor to have Work Orders
      classMethods: {
        associate: function(models) {
          // A Contractor (foreignKey) can be associated with a Work Order
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

