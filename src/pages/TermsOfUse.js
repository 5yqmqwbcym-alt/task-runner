import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
        <Link 
          to="/" 
          className="inline-block mb-6 text-primary hover:text-primary-dark transition-colors"
        >
          ← Back to Task Runner
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Use</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Task Runner, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Task Runner is provided as a free, open-source application. You are granted permission to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Use the application for personal or commercial purposes</li>
              <li>Modify the source code for your own use</li>
              <li>Share and distribute the application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Task Runner is provided "as is" without warranty of any kind. We make no guarantees regarding:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>The accuracy or reliability of the application</li>
              <li>Uninterrupted or error-free operation</li>
              <li>The security of data stored in your browser</li>
              <li>Compatibility with all browsers or devices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Task Runner or its developers be liable for any damages arising from the use or inability to use the application, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Loss of data or tasks</li>
              <li>Loss of productivity</li>
              <li>Business interruption</li>
              <li>Any other commercial damages or losses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Responsibility</h2>
            <p className="text-gray-700 mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Backing up your task data</li>
              <li>Ensuring browser compatibility</li>
              <li>Protecting your device and browser data</li>
              <li>Any consequences of data loss</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these terms at any time. Continued use of the application after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Open Source</h2>
            <p className="text-gray-700 mb-4">
              Task Runner is open-source software. The source code is available on GitHub under the MIT License.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
              For questions about these terms, please contact us through our GitHub repository.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
