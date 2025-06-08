import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm.jsx';
import SubmissionSuccess from './components/SubmissionSuccess.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/success" element={<SubmissionSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;