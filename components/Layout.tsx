import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Beginner's PPL Guide. Open Educational Resource.</p>
          <p className="text-xs mt-2 text-slate-500">Consult a physician before beginning any exercise program.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;