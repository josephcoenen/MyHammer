
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import JobPost from './pages/JobPost';
import Directory from './pages/Directory';
import HowItWorks from './pages/HowItWorks';
import ForProfessionals from './pages/ForProfessionals';
import CostGuides from './pages/CostGuides';
import ProProfile from './pages/ProProfile';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-job" element={<JobPost />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pro" element={<ForProfessionals />} />
          <Route path="/cost-guides" element={<CostGuides />} />
          <Route path="/pro/:id" element={<ProProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ChatBot />
      </Layout>
    </Router>
  );
};

export default App;
