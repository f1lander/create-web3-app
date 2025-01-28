'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon, Loader2Icon } from 'lucide-react';
import { useTheme } from 'next-themes';
export default function ThemeSwitch() {
  const [mounter, setMounter] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounter(true);
  }, []);

  if (!mounter) return <Loader2Icon />;

  if (resolvedTheme === 'dark') {
    return <Sun onClick={() => setTheme('light')} />;
  }

  if (resolvedTheme === 'light') {
    return <Moon onClick={() => setTheme('dark')} />;
  }
}
