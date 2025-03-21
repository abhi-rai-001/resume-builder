import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <DocumentTextIcon className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-secondary-800">ResumeCraft</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-secondary-600 hover:text-secondary-900 px-3 py-2 rounded-md">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/builder" className="text-secondary-600 hover:text-secondary-900 px-3 py-2 rounded-md">
                  Resume Builder
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;