import Sidebar from "../../../components/sidebar/Sidebar"
import RegistrationFrom from "../../../components/user-registration/userRegistration"
import Navbar from "../../../components/navbar/Navbar"
const adduser = ()=>{
    return (
        <div className="list">
          <Sidebar/>
          <div className="listContainer">
            <Navbar/>

{/* AREA TO EDIT START */}

            <RegistrationFrom/>

{/* AREA TO EDIT END */}


          </div>
        </div>
      )
}

export default adduser