import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Preview from './pages/Preview';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;