import React from "react";

const TeacherProfile = ({ teacher }) => {
  return (
    <div>
      <h2>Teacher Profile</h2>
      <p>Name: {teacher.firstName} {teacher.lastName}</p>
      <p>Email: {teacher.email}</p>
      <p>Number: {teacher.number}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TeacherProfile;
