import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { AiOutlineLock } from "react-icons/ai";

export default function FacultyAttendance() {
  return (
    <div>
      <Form id="changePasswordForm" onSubmit={()=>{alert("Attendance Updated!")}}>
        <Form.Group className="old mystyle">
          <Form.Label>Student Roll Number</Form.Label>
          <Form.Control/>
        </Form.Group>
        <Form.Group className="old mystyle relative_form_group">
          <Form.Label>Attendance</Form.Label>
          <Form.Control/>
        </Form.Group>
        <Button variant="secondary" onClick={()=>{alert("Attendance Updated!")}} type="submit">
          Update Attendance
        </Button>
      </Form>
    </div>
  )
}
