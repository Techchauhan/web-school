import React from 'react'
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import TeacherListPage from '../../../components/teachers-list/teacherList'

export default function AllTeacher() {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>

{/* AREA TO EDIT START */}

<h1>All Teacher</h1>

{/* AREA TO EDIT END */}
<TeacherListPage/>


    </div>
  </div>
  )
}
