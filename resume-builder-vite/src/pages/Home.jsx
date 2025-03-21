import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary-100 to-white">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-primary-700 mb-6">Create Your Professional Resume</h1>
        <p className="text-secondary-600 text-lg mb-8">
          Build a modern, professional resume in minutes. Choose from multiple templates, customize your content, and download as PDF.
        </p>
        <Link to="/builder">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;