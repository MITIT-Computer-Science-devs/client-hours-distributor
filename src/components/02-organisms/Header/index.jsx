import styles from "./index.module.css";
import React from 'react';
import Navigation from "../../01-molecules/Navigation";

const Header = () => {
  return (
    <div className={styles[""]}>
      <div className="logo"></div>
      <Navigation></Navigation>
    </div>
  )
}

export default Header