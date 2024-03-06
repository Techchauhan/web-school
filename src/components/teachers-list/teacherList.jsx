import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import BadgeIcon from '@mui/icons-material/Badge';
import SendIcon from '@mui/icons-material/Send';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import "./teacherList.css"

const TeacherListPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [filter, setFilter] = useState({
    class: "",
    subject: "",
    name: "",
    number: ""
  });

  useEffect(() => {
    const fetchTeachers = async () => {
      const db = getFirestore();
      let teachersRef = collection(db, "teachers");
      
      if (filter.class) {
        teachersRef = query(teachersRef, where("class", "==", filter.class));
      }
      if (filter.subject) {
        teachersRef = query(teachersRef, where("subject", "==", filter.subject));
      }

      const querySnapshot = await getDocs(teachersRef);
      const teacherList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTeachers(teacherList);
    };

    fetchTeachers();
  }, [filter]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value
    });
  };

  const handleSearchByClass = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value
    });
  };
  const handleSearchByName = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value
    });
  };


  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "number", headerName: "Number", flex: 1 },
    { 
      field: "profilePicture", 
      headerName: "Profile Picture", 
      flex: 1,
      renderCell: (params) => (
        <Avatar alt={`${params.row.firstName} ${params.row.lastName}`} src={params.row.profilePicture} />
      )
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <div>
          <Link to={{ pathname: `/teachers/${params.row.id}`, state: { teacher: params.row } }} style={{ textDecoration: "none" }}>
            <IconButton aria-label="view">
              <BadgeIcon />
            </IconButton>
          </Link>
          <IconButton aria-label="Analytics"  >
            <SignalCellularAltIcon />
          </IconButton>
          <IconButton aria-label="Send Message">
            <SendIcon />
          </IconButton>
          {/* Add more buttons as needed */}
        </div>
      )
    }
  ];
  

  return (
    <div className="teacher-list-container">
      <div className="filter-section">
        <div className="filter-container">
          <div className="search-fields">
            <TextField
              label="Search By Class"
              type="text"
              name="class"
              value={filter.class}
              onChange={handleFilterChange}
              className="filter-input"
            />
            <TextField
              label="Search By Name"
              type="text"
              name="name"
              value={filter.name}
              onChange={handleFilterChange}
              className="filter-input"
            />
          </div>
          <div className="button-fields">
         
            <Button variant="contained" onClick={handleSearchByClass}> <PersonAddIcon/> Assign Class</Button>
            <Button variant="contained" onClick={handleSearchByName}> <MenuBookIcon/>Assign Subject</Button>
          </div>
        </div>
      </div>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid rows={teachers} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default TeacherListPage;
