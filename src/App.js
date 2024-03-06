import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/user";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Adduser from "./pages/user/adduser/adduser";
import AddStudent from "./pages/student/addstudent/addstudent";
import AllStudent from './pages/student/allstudent/allstudent';
import AddTeacher from "./pages/teacher/addteacher/addteacher";
import AllTeacher from "./pages/teacher/allteacher/allteacher";
import TeacherProfile from "./pages/teacher/TeacherProfile/teacherProfile"; // Import TeacherProfile component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/adduser" element={<Adduser />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/all-student" element={<AllStudent />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/all-teacher" element={<AllTeacher />} />

          {/* Add a route for viewing teacher profile */}
          <Route path="/teacher/:teacherId" element={<TeacherProfile />} />

          {/* ADD ANY ROUTE ABOVE */}
          <Route path="/users" element={<User />}>
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>
          <Route path="/products" element={<Adduser />}>
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
