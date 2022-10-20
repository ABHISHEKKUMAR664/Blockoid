import React from 'react';
import Link from "next/link";
import styles from "../styles/Navbar.module.css";


const Navbar = () => {
  return (
      <nav className={styles.mainnav}>
          <ul>
              <Link href="/Add">
                  <li>
                      <a>Add</a>
                  </li>
              </Link>
              <Link href="/Manage">
                  <li>
                      <a>Manage</a>
                  </li>
              </Link>
              <Link href="/Help">
                  <li>
                      <a>Help</a>
                  </li>
              </Link>
              <Link href="/registration">
                  <li>
                      <a>Registration</a>
                  </li>
              </Link>
             
          </ul>
      </nav>
  )
}

export default Navbar;