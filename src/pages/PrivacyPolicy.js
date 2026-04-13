import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
        <Link 
          to="/" 
          className="inline-block mb-6 text-primary hover:text-primary-dark transition-colors"
        >
          ← Back to Task Runner
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              Task Runner is committed to protecting your privacy. This privacy policy explains how we handle your data when you use our application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage</h2>
            <p className="text-gray-700 mb-4">
              Task Runner stores all your task data locally in your browser's localStorage. We do not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Collect or transmit your personal information</li>
              <li>Store your data on external servers</li>
              <li>Track your usage or behavior</li>
              <li>Use cookies or analytics</li>
              <li>Share your data with third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Storage</h2>
            <p className="text-gray-700 mb-4">
              Your tasks are stored exclusively in your browser's localStorage. This means:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Your data never leaves your device</li>
              <li>Clearing your browser data will delete your tasks</li>
              <li>Your tasks are private and accessible only to you</li>
              <li>No account or registration is required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Task Runner does not integrate with or use any third-party services, analytics, or tracking tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy, please contact us through our GitHub repository.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
