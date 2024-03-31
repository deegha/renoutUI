'use client';

import styles from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const links = [
  {
    url: '/dashboard',
    name: 'Create Adds',
  },
  {
    url: '/myads',
    name: 'My ads',
  },
];

export function DashBoardNav() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  function logout() {
    window.localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <div className={styles.containerMain}>
      <div className={styles.mobileMenu}>
        <FontAwesomeIcon
          icon={faBars}
          width={20}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <div className={showMenu ? styles.mobileContainer : styles.container}>
        <div className={styles.containerInner}>
          <Link href="/">Rentouts.lk</Link>
          <ul className={styles.links}>
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                <li className={pathname === link.url ? styles.selected : ''}>
                  {link.name}
                </li>
              </Link>
            ))}
            <li></li>
          </ul>
        </div>
        <div className={styles.logoutBtn} onClick={logout}>
          <FontAwesomeIcon icon={faPowerOff} width={40} height={40} /> log out
        </div>
      </div>
    </div>
  );
}
