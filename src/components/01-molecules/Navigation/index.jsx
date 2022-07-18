import styles from "./index.module.css";
import React from "react";
import ButtonNav from "../../00-atoms/NavButton";

const Navigation = (props) => {
    const { navs = [1, 2, 3] } = props;
    
    return (
        <div className={styles["nav"]}>
            {navs.map((nav) => (
                <ButtonNav key={nav} text={nav}></ButtonNav>
            ))}
        </div>
    );
};

export default Navigation;
