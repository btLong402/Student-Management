// CreateStudent Component for add new student

// Import Modules
import React, { useState} from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
  // eslint-disable-next-line no-unused-vars
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    stID: "",
    image: "",
  });
  // onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .post("http://localhost:5000/students/create-student", studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully created");
          window.location.href = "/students-list";
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Student
    </StudentForm>
  );
};

// Export CreateStudent Component
export default CreateStudent;
