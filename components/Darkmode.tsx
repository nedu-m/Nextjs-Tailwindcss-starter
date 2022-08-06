import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Darkmode() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="border-thin dark:hover:border-accent-200 dark:hover:text-accent-200
      hover:border-accent-200 hover:text-accent-200 rounded-md p-2.5 focus:outline-none"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
