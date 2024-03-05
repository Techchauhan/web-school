import "./allstudent.css"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
 

import React from 'react'

export default function AllStudent() {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <h1>
        All Students
      </h1>
      </div>
    </div>
  )
}
