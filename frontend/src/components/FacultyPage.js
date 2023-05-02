import React, { useState, useEffect } from 'react';
import FacultyAbout from './FacultyAbout';
import FacultyResult from './FacultyResult';
import FacultyAttendance from './FacultyAttendance';
import "./Faculty.css"

export default function FacultyPage(props) {
    useEffect(() => {
        
            // White Theme Colors 
            document.documentElement.style.setProperty('--sidecol1', '#004064');
            document.documentElement.style.setProperty('--col1', 'white');
            document.documentElement.style.setProperty('--textcolor', '#010101');
            document.documentElement.style.setProperty('--bgcol', '#85bad761');
            document.documentElement.style.setProperty('--themeiconcolor', '#004064');
            document.documentElement.style.setProperty('--cpcoltable', '#000000');
            document.documentElement.style.setProperty('--selectcol', '#85bad761');
            document.documentElement.style.setProperty('--tabcolor', '#85bad761');
            document.documentElement.style.setProperty('--tabcolorform', '#b6b1b1');
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");

            window.setTimeout(()=>{
                if(!localStorage.getItem("faculty")){
                    window.location.href = "/";
                }
            },50)
        
    }, [])
    
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
                <button className='flogout' onClick={()=>{window.location.href = "/"; localStorage.removeItem("faculty")}}>Logout</button>
            </div>
        </div>
    )
}



