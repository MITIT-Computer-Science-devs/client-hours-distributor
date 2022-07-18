import styles from "./index.module.css";
import React from "react";
import Navigation from "../../01-molecules/Navigation";

const Footer = (props) => {
    const { children } = props;

    return (
        <footer className={styles["footer"]}>
            <Navigation navs={["dev1", "dev2", "dev3"]}></Navigation>
        </footer>
    );
};

export default Footer;
