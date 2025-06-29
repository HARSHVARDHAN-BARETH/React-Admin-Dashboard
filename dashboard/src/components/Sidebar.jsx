import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger icon */}
      <button
        className="p-4 focus:outline-none z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {/* Overlay */}
      {isOpen && (
       <div
  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
  onClick={() => setIsOpen(false)}
/>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Admin</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:underline">
            Dashboard
          </NavLink>
          <NavLink to="/calendar" onClick={() => setIsOpen(false)} className="hover:underline">
            Calendar
          </NavLink>
          <NavLink to="/kanban" onClick={() => setIsOpen(false)} className="hover:underline">
            Kanban
          </NavLink>
          <NavLink to="/ColorPicker" onClick={() => setIsOpen(false)} className="hover:underline">
            ColorPicker
          </NavLink>
          <NavLink to="/DataTable" onClick={() => setIsOpen(false)} className="hover:underline">
            DataTable
          </NavLink>
          <NavLink to="/RevenuePage" onClick={() => setIsOpen(false)} className="hover:underline">
            RevenuePage
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;