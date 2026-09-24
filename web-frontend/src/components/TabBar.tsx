import { NavLink } from 'react-router-dom';
import { DecksIcon, ProgressIcon, SearchIcon } from './Icons';

const TABS = [
  { to: '/', label: 'Decks', Icon: DecksIcon, end: true },
  { to: '/browse', label: 'Look up', Icon: SearchIcon, end: false },
  { to: '/progress', label: 'Progress', Icon: ProgressIcon, end: false },
];

export default function TabBar() {
  return (
    <nav
      className="bar sticky bottom-0 z-30 shrink-0 border-t"
      style={{ borderColor: 'var(--color-rule)', paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Sections"
    >
      <ul className="flex">
        {TABS.map(({ to, label, Icon, end }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={end}
              className="flex flex-col items-center gap-1 pt-2 pb-1.5 transition-colors"
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className="h-[26px] w-[26px]"
                    filled={isActive}
                    key={isActive ? 'on' : 'off'}
                  />
                  <span
                    className="text-[10px] font-medium tracking-[0.01em]"
                    style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text-faint)' }}
                  >
                    {label}
                  </span>
                  <span className="sr-only">{isActive ? '(current)' : ''}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
