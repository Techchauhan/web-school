import Sidebar from "../../../components/sidebar/Sidebar"
import StudentRegistration from "../../../components/student-admission/student-admission"
import Navbar from "../../../components/navbar/Navbar"
const addStudent = ()=>{
    return (
        <div className="list">
          <Sidebar/>
          <div className="listContainer">
            <Navbar/>

{/* AREA TO EDIT START */}

      <StudentRegistration/>   

{/* AREA TO EDIT END */}


          </div>
        </div>
      )
}

export default addStudent