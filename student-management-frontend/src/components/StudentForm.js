import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^\S.*\S$/, "Name cannot consist of only whitespace characters.")
      .matches(/^[a-z A-Z]+$/, "Name must contain only letters.")
      .min(2, "Name must be at least 2 characters long.")
      .max(30, "Name cannot be longer than 30 characters.")
      .required("Please enter your name."),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    stID: Yup.number()
      .positive("Invalid ID number")
      .integer("Invalid ID number")
      .required("Required")
      .test(
        "len",
        "ID must be exactly 8 characters",
        (val) => val && val.toString().length === 8
      ),
    image: Yup.string().required("Please upload an image."),
  });
  const validationSchemaUpdate = Yup.object().shape({
    name: Yup.string()
      .matches(/^\S.*\S$/, "Name cannot consist of only whitespace characters.")
      .matches(/^[a-z A-Z]+$/, "Name must contain only letters.")
      .min(2, "Name must be at least 2 characters long.")
      .max(30, "Name cannot be longer than 30 characters."),
    email: Yup.string().email("You have enter an invalid email address"),
    stID: Yup.number()
      .positive("Invalid ID number")
      .integer("Invalid ID number")
      .test(
        "len",
        "ID must be exactly 8 characters",
        (val) => val && val.toString().length === 8
      ),
    image: Yup.string(),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik
        {...props}
        validationSchema={props.children === "Update Student" ? validationSchemaUpdate : validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formikProps) => (
          <Form>
            <FormGroup className="form-group">
              <label>Name</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage
                name="name"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label>Email</label>
              <Field name="email" type="text" className="form-control" />
              <ErrorMessage
                name="email"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label>Student ID</label>
              <Field name="stID" type="number" className="form-control" />
              <ErrorMessage
                name="stID"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            {/* Image upload field */}
            <FormGroup className="form-group">
              <label>Image</label>
              <Field name="image" type="text" className="form-control" />
              <ErrorMessage
                name="image"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <Button
              variant="danger"
              size="lg"
              block="block"
              type="submit"
              className="btn-create"
            >
              {props.children}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentForm;
