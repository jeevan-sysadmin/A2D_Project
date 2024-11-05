import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CombinedPage from './pages/CombinedPage'; // Import the new CombinedPage component
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CombinedPage />} /> {/* Use CombinedPage for the root path */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
