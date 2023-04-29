import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FacultyResult() {
  return (
    <div>
      <Form id="changePasswordForm" onSubmit={()=>{alert("Result Updated!")}}>
        <Form.Group className="old mystyle">
          <Form.Label>Student Roll Number</Form.Label>
          <Form.Control/>
        </Form.Group>
        <Form.Group className="old mystyle relative_form_group">
          <Form.Label>Result</Form.Label>
          <Form.Control type="file"/>
        </Form.Group>
        <Button variant="secondary" onClick={()=>{alert("Result Updated!")}} type="submit">
          Update Result
        </Button>
      </Form>
    </div>
  )
}
