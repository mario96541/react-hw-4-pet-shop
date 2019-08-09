import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLink.module.css';

const Nav = () => (
  <header className={styles.navHeader}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.activelink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/pets"
          activeClassName={styles.activelink}
          className={styles.link}
        >
          Pets
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/about"
          activeClassName={styles.activelink}
          className={styles.link}
        >
          About
        </NavLink>
      </li>
    </ul>
  </header>
);
export default Nav;
