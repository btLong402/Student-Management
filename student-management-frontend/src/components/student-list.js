import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then(({ data }) => {
        setStudents(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(students);
  const DataTable = () => {
    return students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  };

  return (
    <>
      {students.length === 0 ? (
        <div className="no-student-message">No student in here!</div>
      ) : (
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>StId</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody> {DataTable()}</tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default StudentList;
