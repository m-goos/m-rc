'use client';

import { useSyncExternalStore } from 'react';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

/**
 * Light/dark toggle.
 *
 * There is no explicit "system" state to click through: the page starts in
 * whatever the OS prefers (resolved by the inline script in `app/layout.tsx`
 * before first paint) and the first click pins a choice in localStorage.
 *
 * The theme lives in a `dark` class on <html>, which is what Tailwind's
 * `darkMode: 'class'` reads. That class is the source of truth, so this
 * subscribes to it rather than keeping a second copy in React state.
 */
function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains('dark');

// the server render cannot know the OS preference; null means "not yet known"
const getServerSnapshot = () => null;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function toggle() {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      type="button"
      onClick={toggle}
      // the icon is absent on the server render, so reserve its space to
      // keep the navbar from shifting once it appears
      className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 dark:active:bg-slate-600"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark === null ? null : isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
