import React from 'react'
import { useState } from "react";
import jQuery from './jQuery'


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
var csrftoken = getCookie("csrftoken");

export default function FacultyResult(){
  const [rollNumber, setRollNumber] = useState('');
  const [semester, setSemester] = useState('');
  const [resultFile, setResultFile] = useState(null);
  const [resultFileData, setResultFileData] = useState(null);

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleResultFileChange = (event) => {
    setResultFile(event.target.files[0]);
    var fReader = new FileReader();
    fReader.readAsDataURL(event.target.files[0]);
    fReader.onloadend = function (event) {
      setResultFileData(event.target.result)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestoptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        rollno: rollNumber,
        semester: semester,
        file: resultFileData,
      }),
    };
    fetch("/api/updateresult", requestoptions)
      .then((data) => {if(data.status==200)alert("Result Updated")})
      .catch((error) => console.error(error));
    
    setResultFile("")
    setResultFileData("")
    setRollNumber("")
    setSemester("")
    document.getElementById("resultFile").value = ""
  };

  return (
    <form className="attendance-form" onSubmit={handleSubmit}>
      <label className="attendance-form__label" htmlFor="rollNumber">Student Roll Number:</label>
      <input
        className="attendance-form__input"
        type="text"
        id="rollNumber"
        name="rollNumber"
        value={rollNumber}
        onChange={handleRollNumberChange}
      />
      <label className="attendance-form__label" htmlFor="semester">Semester:</label>
      <select
        className="attendance-form__input"
        id="semester"
        name="semester"
        value={semester}
        onChange={handleSemesterChange}
      >
        <option value="">Select Semester</option>
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
        <option value="3">Semester 3</option>
        <option value="4">Semester 4</option>
        <option value="5">Semester 5</option>
        <option value="6">Semester 6</option>
        <option value="7">Semester 7</option>
        <option value="8">Semester 8</option>
      </select>
      <label className="attendance-form__label" htmlFor="resultFile">Result File:</label>
      <input
        className="attendance-form__input"
        type="file"
        id="resultFile"
        name="resultFile"
        onChange={handleResultFileChange}
      />
      <button className="attendance-form__button" type="submit">Update Result</button>
    </form>
  );
}