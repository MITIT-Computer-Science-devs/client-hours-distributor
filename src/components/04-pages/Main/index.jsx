import styles from "./index.module.css";
import React from 'react';
import TMain from "../../03-templates/TMain";

const Main = () => {
  
  return (
    <div className={styles["main"]}>
      <TMain></TMain>
    </div>
  )
}

export default Main