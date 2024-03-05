import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import FlagIcon from '@mui/icons-material/Flag';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">PulseZest School</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">Student</p>
          <Link to="/add-student" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddAltIcon className="icon" />
              <span>Add Student</span>
            </li>
          </Link>
          <Link to="/all-student" style={{ textDecoration: "none" }}>
            <li>
              <GroupsIcon className="icon" />
              <span>All Student</span>
            </li>
          </Link>
          <Link to="/user/adduser" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddDisabledIcon className="icon" />
              <span>Disable Student</span>
            </li>
          </Link>
          <Link to="/user/adduser" style={{ textDecoration: "none" }}>
            <li>
              <FlagIcon className="icon" />
              <span>Student House</span>
            </li>
          </Link>
          <Link to="/user/adduser" style={{ textDecoration: "none" }}>
            <li>
              <DeleteIcon className="icon" />
              <span>Bulk Delete</span>
            </li>
          </Link>
      

          <p className="title">Teahcer</p>
          <Link to="/add-teacher" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddAltIcon className="icon" />
              <span>Add Teacher</span>
            </li>
          </Link>
          <Link to="/all-teacher" style={{ textDecoration: "none" }}>
            <li>
              <GroupsIcon className="icon" />
              <span>All Teacher</span>
            </li>
          </Link>


          <p className="title">User</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/user/adduser" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddAltIcon className="icon" />
              <span>ADD Users</span>
            </li>
          </Link>
      
          <p className="title">CBSE Examination</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Exam</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Exam Shedule</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Print Marksheet</span>
          </li>
          <p className="title">About You</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
