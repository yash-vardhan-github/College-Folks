import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

export default function FacultyAbout(props) {
    console.log(props)
    const data = {
        "id": 1,
        "IDNumber": "100000001",
        "name": "Varun Kumar",
        "password": "3201",
        "encryptedpassword": "",
        "username": "faculty.100000001@hbtu.ac.in",
        "department": "Computer Science and Engineering",
        "phone_number": "+91 2145521122",
        "designation": "Professor",
        "joining_date": "2023-04-28",
        "qualifications": "PHD, MSC, MTech, BTech",
        "research_interests": "Data Science",
        "teaching_experience": "5 Yrs",
        "professional_experience": "8 Yrs"
    }
  return (
    <>
    <div className="card shadow-sm" id="card">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>{" General Information"}
                </h3>
                <Table striped bordered hover variant="dark">
                        <tbody>
                          <tr>
                            {/* <td>1</td> */}
                            <td>IDNumber</td>
                            <td>{data.IDNumber}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Name</td>
                            <td>{data.name}</td>
                          </tr>
                          <tr>
                            {/* <td>3</td> */}
                            <td>Designation</td>
                            <td>{data.designation}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Department</td>
                            <td>{data.department}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Phone Number</td>
                            <td>{data.phone_number}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Joining Date</td>
                            <td>{data.joining_date}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Qualifications</td>
                            <td>{data.qualifications}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Research Interests</td>
                            <td>{data.research_interests}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Experience</td>
                            <td>{data.professional_experience}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Teaching Experience</td>
                            <td>{data.teaching_experience}</td>
                          </tr>
                        </tbody>
                </Table>
              </div>
              <div className="card-body pt-0"></div>
            </div>
    </>
  )
}
