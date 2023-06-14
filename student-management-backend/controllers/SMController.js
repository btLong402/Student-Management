const smService = require("../services/SMService");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await smService.getAllStudents();
    res.json({ data: students, status: "Success!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = await smService.createStudent(req.body);
    await student.save();
    res.json({ data: student, status: "Success!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await smService.getStudentById(req.params.id);
    res.json({ data: student, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await smService.updateStudent(req.params.id, req.body);
    res.json({ data: student, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await smService.deleteStudent(req.params.id);
    res.json({ data: student, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};