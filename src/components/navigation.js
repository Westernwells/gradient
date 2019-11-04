import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Search from './Search'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
      </li>
      </ul>
      <Search />
  </nav>
)
