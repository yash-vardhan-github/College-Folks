import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
export default function FacultyAbout(props) {
  if (props.data.data) {
    return (
      <div className="flist">
        <div className="frow">
          <div className="fbold">IDNumber</div>
          <div className="fget">{props.data.data.IDNumber}</div>
        </div>
        <div className="frow">
          <div className="fbold">Name</div>
          <div className="fget">{props.data.data.name}</div>
        </div>
        <div className="frow">
          <div className="fbold">Department</div>
          <div className="fget">{props.data.data.department}</div>
        </div>
        <div className="frow">
          <div className="fbold">Phone Number</div>
          <div className="fget">{props.data.data.phone_number}</div>
        </div>
        <div className="frow">
          <div className="fbold">Designation</div>
          <div className="fget">{props.data.data.designation}</div>
        </div>
        <div className="frow">
          <div className="fbold">Joining Date</div>
          <div className="fget">{props.data.data.joining_date}</div>
        </div>
        <div className="frow">
          <div className="fbold">Qualifications</div>
          <div className="fget">{props.data.data.qualifications}</div>
        </div>
        <div className="frow">
          <div className="fbold">Research Interests</div>
          <div className="fget">{props.data.data.research_interests}</div>
        </div>
        <div className="frow">
          <div className="fbold">Teaching Experience</div>
          <div className="fget">{props.data.data.teaching_experience}</div>
        </div>
        <div className="frow">
          <div className="fbold">Professional Experience</div>
          <div className="fget">{props.data.data.professional_experience}</div>
        </div>
      </div>
    );
  }
  else if(localStorage.getItem("faculty")){
    return (
      <div className="flist">
        <div className="frow">
          <div className="fbold">IDNumber</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).IDNumber}</div>
        </div>
        <div className="frow">
          <div className="fbold">Name</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).name}</div>
        </div>
        <div className="frow">
          <div className="fbold">Department</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).department}</div>
        </div>
        <div className="frow">
          <div className="fbold">Phone Number</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).phone_number}</div>
        </div>
        <div className="frow">
          <div className="fbold">Designation</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).designation}</div>
        </div>
        <div className="frow">
          <div className="fbold">Joining Date</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).joining_date}</div>
        </div>
        <div className="frow">
          <div className="fbold">Qualifications</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).qualifications}</div>
        </div>
        <div className="frow">
          <div className="fbold">Research Interests</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).research_interests}</div>
        </div>
        <div className="frow">
          <div className="fbold">Teaching Experience</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).teaching_experience}</div>
        </div>
        <div className="frow">
          <div className="fbold">Professional Experience</div>
          <div className="fget">{JSON.parse(localStorage.getItem("faculty")).professional_experience}</div>
        </div>
      </div>
    );
  }
  return (<></>)
}
