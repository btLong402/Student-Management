import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
// EditStudent Component
const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    stID: "",
    image: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/students/" + id)
      .then(({ data }) => {
        setFormValues({
          name: data.data["name"],
          email: data.data["email"],
          stID: data.data["stID"],
          image: data.data["image"],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  //onSubmit handler
  console.log(formValues);
  const onSubmit = async (studentObject) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/students/" + id,
        studentObject
      );
      if (res.status === 200) {
        alert("Student successfully updated");
        window.location.href="/students-list";
      } else {
        return Promise.reject();
      }
    } catch (error) {
      console.error(error.message);
      alert("Something went wrong");
    }
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        const { name, email, stID } = res.data;
        setFormValues({ name, email, stID });
      })
      .catch((err) => console.log(err));
  }, []);

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};

// Export EditStudent Component
export default EditStudent;
