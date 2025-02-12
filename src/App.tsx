import { useState } from 'react';
import './App.css';
import { cn } from '@/lib/utils';
import { Article } from './Article';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  /** 切换主题 */
  const onToggleDark = () => {
    document.startViewTransition(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark');
    });
  };

  return (
    <div id='view-transition-root' className={cn('w-screen h-screen')}>
      <div className={cn('pt-14', 'max-w-5xl mx-auto p-8')}>
        <button
          className={cn(
            'bg-neutral-800 text-white px-3 py-2 rounded',
            'dark:bg-neutral-200 dark:text-black',
            'mb-6',
            'cursor-pointer'
          )}
          onClick={onToggleDark}
        >
          {theme === 'light' ? '切换为暗色' : '切换为亮色'}
        </button>

        <Article />
      </div>
    </div>
  );
}

export default App;
