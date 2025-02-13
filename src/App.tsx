import { useState } from 'react';
import './App.css';
import { cn } from '@/lib/utils';
import { Article } from './Article';

type Theme = 'light' | 'dark';

function App() {
  /** 当前主题 */
  const [theme, setTheme] = useState<Theme>('light');

  /** 切换主题 */
  const onToggleDark = () => {
    document.startViewTransition(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark');
    });
  };

  const buttonOptions = [
    {
      label: '透明度过渡',
      onClick: () => {
        document.documentElement.style.setProperty('--transition-type', 'opacity');
        onToggleDark();
      }
    },
    {
      label: '窗帘效果',
      onClick: () => {
        document.documentElement.style.setProperty('--transition-type', 'curtain');
        onToggleDark();
      }
    },
    {
      label: 'ikun 效果',
      onClick: () => {
        document.documentElement.style.setProperty('--transition-type', 'ikun');
        onToggleDark();
      }
    }
  ];
  return (
    <div className={cn('w-screen h-screen')}>
      <div className={cn('pt-14', 'max-w-5xl mx-auto p-8')}>
        <div className='text-gray-700 dark:text-gray-300 mb-4'>点击按钮切换主题，查看效果</div>

        <div className='flex gap-2'>
          {buttonOptions.map((option) => (
            <button
              key={option.label}
              className={cn(
                'bg-neutral-800 text-white px-3 py-2 rounded',
                'dark:bg-neutral-200 dark:text-black',
                'mb-6',
                'cursor-pointer select-none'
              )}
              onClick={option.onClick}
            >
              {option.label}
            </button>
          ))}
        </div>

        <Article />
      </div>
    </div>
  );
}

export default App;
