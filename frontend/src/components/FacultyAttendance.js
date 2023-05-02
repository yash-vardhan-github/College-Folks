import React from "react";
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

export default function FacultyAttendance() {
  const [rollNumber, setRollNumber] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestoptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        rollno:rollNumber,
        attendance:attendance
      }),
    };
    fetch("/api/updateattendance", requestoptions)
      .then((data) => {if(data.status==200)alert("Attendance Updated")})
      .catch((error) => console.error(error));

    setRollNumber("");
    setAttendance("");
  };

  return (
    <form className="attendance-form" onSubmit={handleSubmit}>
      <label className="attendance-form__label">
        Roll Number:
        <input
          className="attendance-form__input"
          type="text"
          value={rollNumber}
          onChange={(event) => setRollNumber(event.target.value)}
        />
      </label>
      <label className="attendance-form__label">
        Attendance:
        <input
          className="attendance-form__input"
          type="text"
          value={attendance}
          onChange={(event) => setAttendance(event.target.value)}
        />
      </label>
      <button className="attendance-form__button" type="submit">
        Submit
      </button>
    </form>
  );
}
