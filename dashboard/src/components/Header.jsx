import { useTheme } from '../components/theme';

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-700 shadow-md">
      <h1 className="text-xl font-semibold">Shoppy</h1>
      <button onClick={toggleTheme} className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;