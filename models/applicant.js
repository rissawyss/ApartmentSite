module.exports = function(sequelize, DataTypes) {
  var Applicant = sequelize.define("Applicant", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      isEmail: true// checks for email format (foo@bar.com)
      }
    },
    phone: DataTypes.STRING,
    dl_num: DataTypes.STRING,
    dl_state: DataTypes.STRING,
    num_occupants: DataTypes.INTEGER,
    birth_date: DataTypes.STRING,
    current_street: DataTypes.STRING,
    current_city: DataTypes.STRING,
    current_state: DataTypes.STRING,
    current_zip: DataTypes.STRING,
    hear_about: DataTypes.TEXT,
    prev_landlord: DataTypes.STRING,
    prev_landlord_phone: DataTypes.STRING,
    prev_rent: DataTypes.DECIMAL(10,2),
    from_date: DataTypes.DATEONLY,
    to_date: DataTypes.DATEONLY,
    prev_street: DataTypes.STRING,
    prev_state: DataTypes.STRING,
    prev_zip: DataTypes.STRING,
    reason_left: DataTypes.TEXT,
    employer1: DataTypes.STRING,
    employer_city: DataTypes.STRING,
    employer_state: DataTypes.STRING,
    employer_phone: DataTypes.STRING,
    emp_from_date: DataTypes.DATEONLY,
    emp_to_date: DataTypes.DATEONLY,
    gross_salary: DataTypes.DECIMAL(10,2),
    position_held: DataTypes.STRING,
    ref_name: DataTypes.STRING,
    ref_phone: DataTypes.STRING,
    desired_move_in: DataTypes.DATEONLY,
    vehicle: DataTypes.STRING,
    pet_answer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    pet_descrip: DataTypes.STRING,
    num_occupants_under18: DataTypes.INTEGER,
    soft_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Applicant;
};