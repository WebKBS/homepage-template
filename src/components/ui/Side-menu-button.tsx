'use client';

import styles from "./Side-menu-button.module.css";
import {useState} from "react";
import SideMenu from "@/components/navigator/SideMenu";

function SideMenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    const sideMenuOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className={styles.menu} onClick={sideMenuOpen}>
                <span className={!isOpen ? styles.line : styles.x1}></span>
                {!isOpen && <span className={styles.line}></span>}
                <span className={!isOpen ? styles.line : styles.x2}></span>
            </button>
            {isOpen && <SideMenu/>}
        </>
    )
}

export default SideMenuButton