import styles from "./index.module.css";
import React from "react";
import Header from "../../02-organisms/Header";
import Footer from "../../02-organisms/Footer";

const TMain = () => {
    return (
        <div className={styles["template"]}>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
};

export default TMain;
