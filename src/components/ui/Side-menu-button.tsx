'use client';

import styles from "./Side-menu-button.module.css";
import {useContext} from "react";
import SideMenu from "@/components/navigator/SideMenu";
import {MenuContext} from "@/context/MenuContext";

function SideMenuButton() {
    const {toggle, mode} = useContext(MenuContext);


    return (
        <>
            <button className={styles.menu} onClick={toggle}>
                <span className={!mode ? styles.line : styles.x1}></span>
                {!mode && <span className={styles.line}></span>}
                <span className={!mode ? styles.line : styles.x2}></span>
            </button>
            {mode && <SideMenu/>}
        </>
    )
}

export default SideMenuButton