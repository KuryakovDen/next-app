'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/features/theme-toggle/hooks/useTheme';
import { Button } from '@/shared/ui/Button';
import { MoonIcon } from '@/features/theme-toggle/components/MoonIcon';
import { SunIcon } from '@/features/theme-toggle/components/SunIcon';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="text" onClick={toggleTheme} className={styles.themeToggle}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={styles.toggleContent}
        >
          {theme === 'light' ? (
            <>
              <MoonIcon />
              <span>Темная тема</span>
            </>
          ) : (
            <>
              <SunIcon />
              <span>Светлая тема</span>
            </>
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
