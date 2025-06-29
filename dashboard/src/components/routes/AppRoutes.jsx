import { Routes, Route } from 'react-router-dom';
import Dashboard from '../features/Dashboard';
import Calendar from '../features/Calendar';
import Kanban from '../features/Kanban';
import ColorPicker from '../features/ColorPicker';
import DataTable from '../features/DataTable';
import RevenuePage from '../features/RevenuePage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/calendar" element={<Calendar />} />
    <Route path="/kanban" element={<Kanban />} />
    <Route path="/ColorPicker" element={<ColorPicker />} />
    <Route path="/DataTable" element={<DataTable />} />
    <Route path="/RevenuePage" element={<RevenuePage />} />
  </Routes>
);

export default AppRoutes;