
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PenTool, BookOpenCheck, Menu, X, GraduationCap, FileText, Zap } from 'lucide-react';

const NAV_ITEMS = [
  { label: '概覽 (Dashboard)', path: '/', icon: LayoutDashboard },
  { label: '練習 (Quiz)', path: '/quiz-config', icon: PenTool },
  { label: '重點筆記 (Concepts)', path: '/concepts', icon: BookOpenCheck },
  { label: '速讀 (Cheatsheet)', path: '/cheatsheet', icon: Zap },
  { label: '應試 (Skills)', path: '/exam-skills', icon: FileText },
  { label: '5** 提示 (Tips)', path: '/tips', icon: GraduationCap },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 fixed h-full z-10">
        <div className="p-6 border-b border-slate-100 flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            5**
          </div>
          <h1 className="font-bold text-lg text-slate-800">ICT Master</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-white border-b border-slate-200 z-20 flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            5**
          </div>
          <span className="font-bold text-slate-800">ICT Master</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-10 pt-20 px-4 md:hidden">
          <nav className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-4 border-b border-slate-100 text-slate-700"
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Main Content Wrapper */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <main className="flex-1 pt-20 md:pt-0 p-6">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>

        <footer className="bg-slate-900 text-slate-200 py-8 px-6 mt-auto">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-medium mb-2">
              &copy; {new Date().getFullYear()} HKDSE ICT Master. Created by Andy Lau. All Rights Reserved.
              <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded-full ml-2">
                v0.5.0 (Alpha)
              </span>
            </p>
            <p className="text-xs text-gray-500">
              Disclaimer: This is an independent study resource and is not affiliated with the HKEAA.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
