import styles from "./index.module.css";
import React from 'react';
import Navigation from "../../01-molecules/Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo"></div>
      <Navigation></Navigation>
    </header>
  )
}

export default Header