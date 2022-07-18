import styles from "./index.module.css";
import React from "react";
import ButtonNav from "../../00-atoms/ButtonNav";

const Navigation = (props) => {
    const { navs = [1, 2, 3] } = props;
    
    return (
        <div className={styles[""]}>
            {navs.map((nav) => (
                <ButtonNav key={nav} text={nav}></ButtonNav>
            ))}
        </div>
    );
};

export default Navigation;
