import { useTheme } from '../theme';
import Sidebar from '../Sidebar';
import Header from '../Header';

const MainLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;