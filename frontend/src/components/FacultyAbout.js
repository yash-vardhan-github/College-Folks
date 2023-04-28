import React from 'react'

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
    <div className='flist'>
        <div className='frow'>
            <div className='fbold'>IDNumber</div>
            <div className='fget'>{data.IDNumber}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Name</div>
            <div className='fget'>{data.name}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Department</div>
            <div className='fget'>{data.department}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Phone Number</div>
            <div className='fget'>{data.phone_number}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Designation</div>
            <div className='fget'>{data.designation}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Joining Date</div>
            <div className='fget'>{data.joining_date}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Qualifications</div>
            <div className='fget'>{data.qualifications}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Research Interests</div>
            <div className='fget'>{data.research_interests}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Teaching Experience</div>
            <div className='fget'>{data.teaching_experience}</div>
        </div>
        <div className='frow'>
            <div className='fbold'>Professional Experience</div>
            <div className='fget'>{data.professional_experience}</div>
        </div>
    </div>
  )
}
