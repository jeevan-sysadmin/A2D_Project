import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';

const AdminPage = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const snapshot = await db.collection('formSubmissions').get();
      setSubmissions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchSubmissions();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        {submissions.map((submission) => (
          <div key={submission.id} style={{ border: '1px solid #ddd', margin: '8px', padding: '8px' }}>
            <p><strong>Name:</strong> {submission.name}</p>
            <p><strong>Email:</strong> {submission.email}</p>
            <p><strong>Message:</strong> {submission.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
