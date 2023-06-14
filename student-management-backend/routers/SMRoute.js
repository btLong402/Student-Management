const express = require('express');
const {getAllStudents, createStudent, getStudentById, updateStudent, deleteStudent} = require('../controllers/SMController');

const router = express.Router();

router.route('/').get(getAllStudents);
router.route('/create-student').post(createStudent);
router.route("/:id").get(getStudentById).put(updateStudent).delete(deleteStudent);
module.exports = router;