const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const EmployeeInformationSchema = new Schema ({
        fName: {
            type: String,
            required: true
        },
        mName: {
            type: String
        },
        lName: {
            type: String,
            required: true
        },
        birthday: {
            type: Date,
            required: true
        },
        age: {
            type: Number,
            min: 18,
            max: 70
        },
        favorite: {
            pet: {type: String},
            car: {type: String},
            food: {type: String}
        }
    });


const EmployeeInformation = mongoose.model('employee_information', EmployeeInformationSchema);
module.exports = EmployeeInformation;