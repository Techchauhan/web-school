import React, { useState } from "react";
import "./teacherRegistration.css"
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth } from "../../firebaseConfig";

const TeacherAdd = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    age: "",
    password: "",
    profilePicture: "", // Added profilePicture field to store image URL
  });
  const [profilePictureFile, setProfilePictureFile] = useState(null); // State for storing uploaded profile picture file
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null); // State for storing error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePictureFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Register the user with email and password
      const { email, password } = formData;
      await createUserWithEmailAndPassword(auth, email, password);

      // Get the UID of the newly created user
      const user = auth.currentUser;
      const uid = user.uid;

      // Upload profile picture to Firebase Storage
      let profilePictureUrl = "";
      if (profilePictureFile) {
        const storage = getStorage();
        const storageRef = ref(storage, `profilePictures/${uid}`);
        const uploadTask = uploadBytesResumable(storageRef, profilePictureFile);

        // Register observers for state changes, errors, and completion of the upload
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
              default:
                console.log('Unknown state');
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
            console.error('Upload failed:', error);
            setError(error.message);
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              profilePictureUrl = downloadURL;
              // Now that we have the download URL, store the teacher's details in Firestore
              const db = getFirestore();
              const teacherRef = doc(db, "teachers", uid);
              setDoc(teacherRef, {
                ...formData,
                profilePicture: profilePictureUrl,
              }).then(() => {
                // Reset the form data after successful submission
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  number: "",
                  age: "",
                  password: "",
                  profilePicture: "", // Clear the profilePicture field
                });
                setProfilePictureFile(null); // Clear the profilePictureFile state
                setIsSubmitted(true);
                setIsSubmitting(false);
                setError(null); // Clear any previous errors
                console.log("Data stored successfully!");
              }).catch((error) => {
                console.error("Error storing data:", error.message);
                setIsSubmitting(false);
                setError(error.message);
              });
            });
          }
        );
      }

    } catch (error) {
      // Handle errors
      console.error("Error storing data:", error.message);
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  // <<<<____________________FORM AREA UI________________________>>>>>>

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile No:</label>
          <input
            type="number"
            name="number"
            value={formData.number}
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
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isSubmitted && <p>Data submitted successfully!</p>}
    </div>
  );
};

export default TeacherAdd;
