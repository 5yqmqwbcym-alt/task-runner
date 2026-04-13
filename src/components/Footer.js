import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-8">
      <div className="max-w-2xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Task Runner. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
