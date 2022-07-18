import styles from "./index.module.css";
import React from 'react';

const ButtonNav = (props) => {
  const {text="button"} = props;

  return (
    <button className={styles["button"]}>{text}</button>
  )
}

export default ButtonNav