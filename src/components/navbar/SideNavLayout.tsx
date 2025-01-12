import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface SideNavLayoutProps {
  children: React.ReactNode;
}

const SideNavLayout = ({ children }: SideNavLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b bg-gray-100">
          <h2 className="text-xl font-semibold">Shop By</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-200 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-64px)]">
          {children}
        </nav>
      </div>
    </div>
  );
};
export default SideNavLayout;