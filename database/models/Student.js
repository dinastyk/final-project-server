/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

/*
  This code defines a Sequelize model for a student entity in a database. 
  It includes fields for the student's first name, last name, email, image URL, and GPA. 
*/
const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Emails must be different for each student
    validate: {
      isEmail: true // Checks if it's a valid email address
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true // Checks if it's a valid URL
    },
    defaultValue: 'https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg' // Placeholder
  },

  gpa: {
    type: Sequelize.DECIMAL(2,1), // Sets precision ad format of the GPA input
    validate: {
      // Use the built-in validators of isDecimal, min, and amx
      isDecimal: true,
      min: 0.0,
      max: 4.0
    }
  }

});

// Export the student model
module.exports = Student;