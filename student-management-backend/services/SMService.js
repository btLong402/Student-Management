const StModel = require("../models/student");

exports.getAllStudents = async () => {
    return await StModel.find();
};

exports.createStudent = async (student) =>{
    return await StModel.create(student);
};

exports.getStudentById = async (id) => {
    return await StModel.findById(id);
};

exports.updateStudent = async (id, student) =>{
    return await StModel.findByIdAndUpdate(id, student);
};

exports.deleteStudent = async (id) =>{
    return await StModel.findByIdAndDelete(id);
};