import React from 'react'
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import TeacherProfile from '../../../components/teacher-profile/teacherProfile'

export default function teacherProfile() {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>

        <h1>Add Teacher</h1>

        <TeacherProfile/>

      </div>
    </div>
  )
}
