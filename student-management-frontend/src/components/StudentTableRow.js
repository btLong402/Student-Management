import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
  const { _id, name, email, stID, image } = props.obj;

  const deleteStudent = () => {
    axios
      .delete("http://localhost:5000/students/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>
        <img src={image} alt="Avatar" />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{stID}</td>
      <td>
        <div className="btn-row">
          <Link className="edit-link" to={"/edit-student/" + _id}>
            Edit
          </Link>
          <Button
            onClick={deleteStudent}
            size="sm"
            variant="danger"
            className="btn-delete"
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default StudentTableRow;
