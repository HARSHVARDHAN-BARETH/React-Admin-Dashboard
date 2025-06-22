import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-64 h-screen bg-white dark:bg-gray-800 p-4">
    <h2 className="text-2xl font-bold mb-6 text-center">Admin</h2>
    <nav className="flex flex-col space-y-2">
      <NavLink to="/" className="hover:underline">Dashboard</NavLink>
      <NavLink to="/calendar" className="hover:underline">Calendar</NavLink>
      <NavLink to="/kanban" className="hover:underline">Kanban</NavLink>
    </nav>
  </aside>
);

export default Sidebar;