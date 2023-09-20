'use client';

import {useState} from "react";
import {menuItems} from "@/data/navigation";
import Link from "next/link";
import styles from './NaviItem.module.css';

function NaviItem({onClick}: { onClick?: () => void }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleMenu = (index: number) => {
        if (openIndex === index) {
            // 클릭한 메뉴가 이미 열려 있는 경우 닫는다
            setOpenIndex(null);
        } else {
            // 클릭한 메뉴 오픈
            setOpenIndex(index);
        }
    };

    return (
        <>
            {menuItems.map((menuItem, index) => (
                <li key={index}>
                    <div>
                        <button
                            type="button"
                            onClick={() => toggleMenu(index)} // 메뉴 클릭 시 토글 함수 호출
                        >
                            {menuItem.title}
                        </button>
                    </div>
                    <ul className={openIndex === index ? styles.close : styles.open}>
                        {menuItem.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <Link href={link.href} onClick={onClick}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </>
    );
}

export default NaviItem;
