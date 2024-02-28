import React, { useState } from 'react';
import './student-admission.css';

const StudentAdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'male',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    previousSchool: '',
    gradeApplyingFor: '1st Grade',
    interestedSubjects: '',
    comments: '',
    aadharCard: null,
    birthCertificate: null,
    previousSchoolTC: null,
    passportSizePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0] // Assuming you only want to store the first file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: 'male',
      address: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      phone: '',
      previousSchool: '',
      gradeApplyingFor: '1st Grade',
      interestedSubjects: '',
      comments: '',
      aadharCard: null,
      birthCertificate: null,
      previousSchoolTC: null,
      passportSizePhoto: null,
    });
  };
  return (
    <div className="student-admission-form">
    <div className="admission-number-card">
    <h2>Student Admission Form</h2>
    <h3>Admission Number</h3>
    <p>AD123456</p>
     </div>

    <form onSubmit={handleSubmit}>
      <div>
        <label className="left-aligned">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="left-aligned">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      {/* Other fields */}
      <div className="left-aligned">
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="left-aligned">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>ZIP Code:</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="left-aligned">
        <label>Previous School:</label>
        <input
          type="text"
          name="previousSchool"
          value={formData.previousSchool}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Grade Applying For:</label>
        <select name="gradeApplyingFor" value={formData.gradeApplyingFor} onChange={handleChange}>
          <option value="1st Grade">1st Grade</option>
          <option value="2nd Grade">2nd Grade</option>
          <option value="3rd Grade">3rd Grade</option>
          {/* Add more grade options as needed */}
        </select>
      </div>
      <div className="full-width">
        <label>Interested Subjects:</label>
        <input
          type="text"
          name="interestedSubjects"
          value={formData.interestedSubjects}
          onChange={handleChange}
        />
      </div>
      <div className="full-width">
        <label>Comments:</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
      </div>


      <div>
      <label>Upload Aadhar Card *:</label>
      <input
        type="file"
        name="aadharCard"
        accept="image/*,.pdf"
        onChange={handleFileChange}
        required
      />
    </div>
    <div>
      <label>Upload Birth Certificate *:</label>
      <input
        type="file"
        name="birthCertificate"
        accept="image/*,.pdf"
        onChange={handleFileChange}
        required
      />
    </div>
    <div>
      <label>Upload Passprot Size Image *:</label>
      <input
        type="file"
        name="passportSizePhoto"
        accept="image/*,.pdf"
        onChange={handleFileChange}
        required
      />
    </div>
    <div>
      <label>Upload TC of Previous School:</label>
      <input
        type="file"
        name="previousSchoolTC"
        accept="image/*,.pdf"
        onChange={handleFileChange}
      />
    </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  
  
  );
};

export default StudentAdmissionForm;
