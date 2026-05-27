'use client';

import { usePathname, useRouter } from 'next/navigation';
import Dock from '@/components/Dock';

function NavIcon({ active, children }) {
  return (
    <div
      className={[
        'grid place-items-center',
        active ? 'text-gold' : 'text-ivory/85',
        'transition-colors duration-300',
      ].join(' ')}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function IconBook({ active }) {
  return (
    <NavIcon active={active}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5.5C4 4.12 5.12 3 6.5 3H20v17.5c0 .83-.67 1.5-1.5 1.5H6.5C5.12 22 4 20.88 4 19.5V5.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 7h8M8 11h8M8 15h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </NavIcon>
  );
}

function IconCompass({ active }) {
  return (
    <NavIcon active={active}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </NavIcon>
  );
}

function IconSpark({ active }) {
  return (
    <NavIcon active={active}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M5 13l.6 2.6L8 16l-2.4.4L5 19l-.6-2.6L2 16l2.4-.4L5 13Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          opacity="0.75"
        />
      </svg>
    </NavIcon>
  );
}

function IconPerson({ active }) {
  return (
    <NavIcon active={active}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M4 21a8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </NavIcon>
  );
}

export default function LibraryDock() {
  const router = useRouter();
  const pathname = usePathname() ?? '/';

  const go = (href) => () => router.push(href);

  const items = [
    { href: '/', label: 'Home', icon: <IconBook active={pathname === '/'} /> },
    { href: '/learn-more', label: 'Explore', icon: <IconCompass active={pathname.startsWith('/learn-more')} /> },
    { href: '/dashboard', label: 'Reading Room', icon: <IconSpark active={pathname.startsWith('/dashboard')} /> },
    { href: '/sign-in', label: 'Account', icon: <IconPerson active={pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')} /> },
  ].map((item) => ({
    icon: item.icon,
    label: item.label,
    onClick: go(item.href),
    className: '',
  }));

  return (
    <div className="pointer-events-none">
      <div className="pointer-events-auto">
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>
    </div>
  );
}

