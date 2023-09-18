import styles from './SideMenu.module.css'
import Link from "next/link";
import {useContext} from "react";
import {MenuContext} from "@/context/MenuContext";


const menuItems = [
    {
        title: '회사소개',
        links: [
            {text: '비전', href: '/about'},
            {text: '회사연혁', href: '/about/history'},
            {text: '오시는길', href: '/about/location'},
        ],
    },
    {
        title: '기술소개',
        links: [
            {text: '전자약 충전 플랫폼', href: '/technology/electronic-medicine'},
            {text: '초음파 구동 신경자극 플랫폼', href: '/technology/ultrasound-stimulation'},
            {text: 'IoT/센서 플랫폼', href: '/technology/iot-sensors'},
        ],
    },
    {
        title: '제품인증',
        links: [
            {text: '인증서', href: '/certification/certificates'},
            {text: '특허/프로그램', href: '/certification/patents'},
            {text: '주요실적', href: '/certification/achievements'},
        ],
    },
    {
        title: '게시판',
        links: [
            {text: '공고게시판', href: '/board/announcements'},
            {text: 'Contact Us', href: '/contact'},
        ],
    },
];


function SideMenu() {
    const {toggle} = useContext(MenuContext);

    return (
        <aside className={styles.sideMenu}>
            <ul className={styles.menuList}>
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        <div>
                            <button type="button">{menuItem.title}</button>
                        </div>
                        <ul>
                            <li>
                                {menuItem.links.map((link, linkIndex) => (
                                    <Link key={linkIndex} href={link.href} onClick={toggle}>{link.text}</Link>
                                ))}
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SideMenu