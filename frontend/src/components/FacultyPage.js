import React, { useState, useEffect } from 'react';
import FacultyAbout from './FacultyAbout';
import FacultyResult from './FacultyResult';
import FacultyAttendance from './FacultyAttendance';
import "./Faculty.css"

export default function FacultyPage(props) {
    const [content, setContent] = useState("About")
    function getContent(){
        if(content=="About")return <FacultyAbout data={props}/>
        if(content=="Result")return <FacultyResult/>
        if(content=="Attendance")return <FacultyAttendance/>
    }
    function boldStyle(b) {
        return b ? { backgroundColor: '#101065', color: "white" } : {}
    }
    return(
        <div className='FacultyPage'>
            <div className='fupper'>
                <div className='fselector'>
                    <div className='foptions' style={boldStyle(content === "About")} onClick={()=>{setContent("About")}}>About</div>
                    <div className='foptions' style={boldStyle(content === "Attendance")} onClick={()=>{setContent("Attendance")}}>Attendance Update</div>
                    <div className='foptions' style={boldStyle(content === "Result")} onClick={()=>{setContent("Result")}}>Result Upload</div>
                </div>
            </div>
            <div className='fmiddle'>
                {getContent()}
            </div>
            <div className='flower'>
                <button className='flogout' onClick={()=>{window.location.href = "/"}}>Logout</button>
            </div>
        </div>
    )
}



