import { Routes, Route } from 'react-router-dom';
import Dashboard from '../features/Dashboard';
import Calendar from '../features/Calendar';
import Kanban from '../features/Kanban';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/calendar" element={<Calendar />} />
    <Route path="/kanban" element={<Kanban />} />
  </Routes>
);

export default AppRoutes;