import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from '../../firebaseConfig'; // Assuming you have initialized Firebase elsewhere
import './userRegistration.scss';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: '',
    userType: 'admin' // Default user type
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { username, email, password, number, userType } = formData;
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Store additional user information in Firestore
      const db = getFirestore();
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        username,
        email,
        number,
        userType,
      });
      console.log('User created:', user);
      // Reset form fields after submission
      setFormData({
        username: '',
        email: '',
        password: '',
        number: '',
        userType: 'admin',
      });
      setError('');
    } catch (error) {
      console.error('Error creating user:', error);
      setError(error.message || 'An error occurred');
    }
    setLoading(false);
  };

  return (
    <div className="registration-form">
      <h2>Create Users</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleRegistration}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>User Type:</label>
          <select name="userType" value={formData.userType} onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="super-admin">Super Admin</option>
            <option value="librarian">Librarian</option>
            <option value="accountant">Accountant</option>
            <option value="receptionist">Receptionist</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Register'}</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
