import React from 'react'
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import TeacherRegistration from '../../../components/teacher-registration/teacherRegistration'

export default function AddTeacher() {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>

{/* AREA TO EDIT START */}

<h1>Add Teacher</h1>

{/* AREA TO EDIT END */}
<TeacherRegistration/>

    </div>
  </div>
  )
}
