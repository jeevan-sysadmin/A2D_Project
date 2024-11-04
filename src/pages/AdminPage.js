// components/AdminPage.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const AdminPage = () => {
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'formSubmissions'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions: ", error);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      {submissions.length > 0 ? (
        <ul>
          {submissions.map(submission => (
            <li key={submission.id}>
              <p>Name: {submission.name}</p>
              <p>Email: {submission.email}</p>
              <p>Message: {submission.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No submissions found.</p>
      )}
    </div>
  );
};

export default AdminPage;
