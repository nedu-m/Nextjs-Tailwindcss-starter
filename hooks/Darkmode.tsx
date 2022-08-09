import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const Darkmode = () => {
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [theme]);

  const toggleDarkmode = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <button
      className="flex items-center justify-center text-2xl font-mono"
      onClick={toggleDarkmode}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default Darkmode;
